"use client";

import { useEffect, useState } from "react";
import type { ArticleDTO } from "@/lib/ai-article-types";

// GET /api/articles/public is public on the backend (CORS-allowed for this
// origin), so the browser can call it directly — no Next.js proxy needed.
export function useArticles() {
  const [articles, setArticles] = useState<ArticleDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/public`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load articles");
        return res.json();
      })
      .then((data: ArticleDTO[]) => {
        if (!cancelled) setArticles(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { articles, loading: !articles && !error, error };
}

"use client";

import { useEffect, useState } from "react";
import type { ArticleDTO } from "@/lib/ai-article-types";

// GET /api/articles/public/:slug/related?limit=N — queried with a limit
// directly instead of fetching every article and slicing to N client-side
// (see useArticles).
export function useRelatedArticles(slug: string | undefined, limit: number) {
  const [articles, setArticles] = useState<ArticleDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setArticles(null);
    setError(false);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/public/${slug}/related?limit=${limit}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load related articles");
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
  }, [slug, limit]);

  return { articles, error };
}

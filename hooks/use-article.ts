"use client";

import { useEffect, useState } from "react";
import type { ArticleDTO } from "@/lib/ai-article-types";

// GET /api/articles/public/:slug — fetches a single article instead of the
// full list (see useArticles), so a blog detail page doesn't have to
// download every generated article's full content just to render one.
export function useArticle(slug: string | undefined) {
  const [article, setArticle] = useState<ArticleDTO | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!slug) return;
    let cancelled = false;
    setArticle(null);
    setNotFound(false);
    setError(false);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/public/${slug}`)
      .then((res) => {
        if (res.status === 404) {
          if (!cancelled) setNotFound(true);
          return null;
        }
        if (!res.ok) throw new Error("Failed to load article");
        return res.json();
      })
      .then((data: ArticleDTO | null) => {
        if (!cancelled && data) setArticle(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [slug]);

  return { article, loading: !article && !notFound && !error, notFound, error };
}

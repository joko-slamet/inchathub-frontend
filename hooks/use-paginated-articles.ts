"use client";

import { useEffect, useState } from "react";
import type { ArticleDTO } from "@/lib/ai-article-types";

type PageResponse = {
  data: ArticleDTO[];
  total: number;
  page: number;
  totalPages: number;
};

// GET /api/articles/public?page=N&limit=N — fetches one page of articles at
// a time instead of the full list (see useArticles), so the /blog list page
// stays fast no matter how many articles exist.
export function usePaginatedArticles(page: number, limit: number) {
  const [articles, setArticles] = useState<ArticleDTO[] | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setArticles(null);
    setError(false);

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/public?page=${page}&limit=${limit}`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load articles");
        return res.json();
      })
      .then((body: PageResponse) => {
        if (!cancelled) {
          setArticles(body.data);
          setTotalPages(body.totalPages);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, [page, limit]);

  return { articles, totalPages, loading: !articles && !error, error };
}

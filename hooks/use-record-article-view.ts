"use client";

import { useEffect, useRef } from "react";

// POST /api/articles/public/:slug/view is public on the backend, fire-and-forget
// (the count is best-effort, not something the visitor needs to wait on or
// see fail). Guards against double-firing for the same slug — React 19 runs
// effects twice in dev (StrictMode) and this hook may re-render if the
// article list backing the page reloads.
export function useRecordArticleView(slug: string | undefined) {
  const recordedSlug = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!slug || recordedSlug.current === slug) return;
    recordedSlug.current = slug;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/articles/public/${slug}/view`, {
      method: "POST",
    }).catch(() => undefined);
  }, [slug]);
}

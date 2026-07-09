"use client";

import { useEffect, useState } from "react";
import type { PromoDTO } from "@/lib/promo-types";

// GET /api/promos/public is public on the backend (CORS-allowed for this
// origin), so the browser can call it directly — no Next.js proxy needed.
export function usePromos() {
  const [promos, setPromos] = useState<PromoDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/promos/public`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load promos");
        return res.json();
      })
      .then((data: PromoDTO[]) => {
        if (!cancelled) setPromos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { promos, loading: !promos && !error, error };
}

"use client";

import { useEffect, useState } from "react";
import type { CompanyLogoDTO } from "@/lib/company-logo-types";

// GET /api/company-logos/public is public on the backend (CORS-allowed for
// this origin), so the browser can call it directly — no Next.js proxy needed.
export function useCompanyLogos() {
  const [logos, setLogos] = useState<CompanyLogoDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/company-logos/public`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load company logos");
        return res.json();
      })
      .then((data: CompanyLogoDTO[]) => {
        if (!cancelled) setLogos(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { logos, loading: !logos && !error, error };
}

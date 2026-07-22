"use client";

import { useEffect, useState } from "react";
import type { Locale, SiteContent } from "@/content/site-content";
import { toPublicPlans } from "@/lib/pricing-format";
import type { PricingPlanDTO } from "@/lib/pricing-types";

// GET /api/pricing-plans is public on the backend (CORS-allowed for this
// origin), so the browser can call it directly — no Next.js proxy needed.
export function usePricingPlans() {
  const [plans, setPlans] = useState<PricingPlanDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/pricing-plans`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load pricing plans");
        return res.json();
      })
      .then((data: PricingPlanDTO[]) => {
        if (!cancelled) setPlans(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { plans, loading: !plans && !error, error };
}

// Merges live backend plans into static pricing copy, falling back to the
// static plans (content/locales/*.ts) while loading or if the backend is
// unreachable — the public pricing sections should always render something.
export function usePricingContent(
  basePricing: SiteContent["pricing"],
  locale: Locale,
): SiteContent["pricing"] {
  const { plans } = usePricingPlans();
  if (!plans) return basePricing;
  return { ...basePricing, plans: toPublicPlans(plans, locale) };
}

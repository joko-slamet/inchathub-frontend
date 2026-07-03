import type { Locale } from "@/content/site-content";
import type { SiteContent } from "@/content/site-content";
import type { PricingPlanDTO } from "./pricing-types";

export function formatRupiah(amount: number, locale: Locale): string {
  const grouped = amount.toLocaleString(locale === "id" ? "id-ID" : "en-US");
  return `Rp${grouped}`;
}

// Shapes backend pricing plans into the format the public marketing
// components (components/sections/pricing.tsx) already expect, so swapping
// the data source doesn't require touching their rendering logic.
export function toPublicPlans(
  plans: PricingPlanDTO[],
  locale: Locale,
): SiteContent["pricing"]["plans"] {
  return [...plans]
    .sort((a, b) => a.sortOrder - b.sortOrder)
    .map((plan) => {
      const translation =
        plan.translations.find((t) => t.locale === locale) ?? plan.translations[0];

      return {
        name: translation?.name ?? plan.key,
        tagline: translation?.tagline ?? "",
        popular: plan.popular,
        originalPrice: formatRupiah(plan.originalPrice, locale),
        price: formatRupiah(plan.price, locale),
        features: translation?.features ?? [],
      };
    });
}

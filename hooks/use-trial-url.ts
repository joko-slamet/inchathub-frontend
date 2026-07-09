"use client";

import { useLocale } from "@/components/locale-provider";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { TRIAL_URL } from "@/content/site-content";

// Reads the admin-editable trial signup URL (closingCta.trialUrl) directly,
// independent of whatever content-fetching strategy the calling page uses —
// several public pages (blog, pricing, promo, product) render the Navbar
// with only static locale content, not the live CMS-merged content, so
// components that need this value (Navbar, Pricing, TryFree) resolve it
// themselves via this hook rather than relying on a prop passed down from
// the page.
export function useTrialUrl(): string {
  const { locale } = useLocale();
  const { settings } = useSiteSettings();
  const row = settings?.find((s) => s.locale === locale);
  return row?.closingCta.trialUrl || TRIAL_URL;
}

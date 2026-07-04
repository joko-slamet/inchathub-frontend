"use client";

import { useEffect, useState } from "react";
import type { Locale, SiteContent } from "@/content/site-content";
import type { SiteSettingDTO } from "@/lib/site-settings-types";

// GET /api/site-settings/public is public on the backend (CORS-allowed for
// this origin), so the browser can call it directly — no Next.js proxy needed.
export function useSiteSettings() {
  const [settings, setSettings] = useState<SiteSettingDTO[] | null>(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/site-settings/public`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load site settings");
        return res.json();
      })
      .then((data: SiteSettingDTO[]) => {
        if (!cancelled) setSettings(data);
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { settings, loading: !settings && !error, error };
}

// Merges the live section copy into the static content, falling back to the
// static content while loading or if the backend has no row for this locale
// yet — the landing page should always render something.
export function useSiteSettingContent(base: SiteContent, locale: Locale): SiteContent {
  const { settings } = useSiteSettings();
  const row = settings?.find((s) => s.locale === locale);
  if (!row) return base;

  return {
    ...base,
    hero: row.hero,
    problem: row.problem,
    omnichannel: row.omnichannel,
    aiCrm: row.aiCrm,
    whyChatHub: row.whyChatHub,
    industries: row.industries,
    closingCta: row.closingCta,
    faq: row.faq,
    footer: row.footer,
  };
}

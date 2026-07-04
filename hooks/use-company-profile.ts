"use client";

import { useEffect, useState } from "react";
import type { Locale, SiteContent } from "@/content/site-content";
import type { CompanyProfileDTO } from "@/lib/company-profile-types";

// GET /api/company-profile/public is public on the backend (CORS-allowed for
// this origin), so the browser can call it directly — no Next.js proxy needed.
export function useCompanyProfile() {
  const [profile, setProfile] = useState<CompanyProfileDTO | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    let cancelled = false;

    fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/company-profile/public`)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load company profile");
        return res.json();
      })
      .then((data: CompanyProfileDTO | null) => {
        if (!cancelled) {
          setProfile(data);
          setLoaded(true);
        }
      })
      .catch(() => {
        if (!cancelled) setError(true);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { profile, loading: !loaded && !error, error };
}

// Merges the live vision/mission copy into the static section, falling back
// to the static section while loading or if the backend has no row yet.
export function useVisionMissionContent(
  base: SiteContent["visionMission"],
  locale: Locale,
): SiteContent["visionMission"] {
  const { profile } = useCompanyProfile();
  const translation = profile?.translations.find((t) => t.locale === locale);
  if (!translation) return base;

  return {
    visionEyebrow: translation.visionEyebrow,
    missionEyebrow: translation.missionEyebrow,
    visionMain: translation.visionMain,
    visionAccent: translation.visionAccent,
    missionItems: translation.missionItems,
  };
}

// Merges the live company story into the static section, falling back to the
// static section while loading or if the backend has no row yet.
export function useAboutContent(base: SiteContent["about"], locale: Locale): SiteContent["about"] {
  const { profile } = useCompanyProfile();
  const translation = profile?.translations.find((t) => t.locale === locale);
  if (!translation) return base;

  return { ...base, paragraphs: translation.paragraphs };
}

// Merges the live contact info cards into the static list, falling back to
// the static list while loading or if the backend has no row yet.
export function useContactInfoCards(
  base: SiteContent["contact"]["infoCards"],
  locale: Locale,
): SiteContent["contact"]["infoCards"] {
  const { profile } = useCompanyProfile();
  const translation = profile?.translations.find((t) => t.locale === locale);
  return translation?.contactInfoCards ?? base;
}

// The map embed URL is shared across locales (not per-translation).
export function useCompanyMapSrc(fallback: string): string {
  const { profile } = useCompanyProfile();
  return profile?.mapSrc ?? fallback;
}

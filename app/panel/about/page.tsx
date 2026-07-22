import { cookies } from "next/headers";
import { getSiteContent, mapEmbedSrc, type Locale } from "@/content/site-content";
import { SESSION_COOKIE } from "@/lib/session";
import { AboutEditor, type AboutPageContent } from "@/components/panel/about-editor";
import type { CompanyProfileDTO } from "@/lib/company-profile-types";

async function getCompanyProfile(token: string): Promise<CompanyProfileDTO | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/company-profile`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return null;
  return res.json();
}

function staticFallback(locale: Locale): AboutPageContent {
  const c = getSiteContent(locale);
  return { about: c.about, visionMission: c.visionMission, infoCards: c.contact.infoCards };
}

// `about.countriesLabel`/`countries`/`countriesMoreLabel` have no admin UI
// yet, so they're not part of CompanyProfileTranslation — kept from the
// static base content untouched, only `paragraphs` comes from the backend.
function buildContent(locale: Locale, profile: CompanyProfileDTO | null): AboutPageContent {
  const base = staticFallback(locale);
  const translation = profile?.translations.find((t) => t.locale === locale);
  if (!translation) return base;

  return {
    about: { ...base.about, paragraphs: translation.paragraphs },
    visionMission: {
      visionEyebrow: translation.visionEyebrow,
      missionEyebrow: translation.missionEyebrow,
      visionMain: translation.visionMain,
      visionAccent: translation.visionAccent,
      missionItems: translation.missionItems,
    },
    infoCards: translation.contactInfoCards,
  };
}

export default async function AdminAboutPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const profile = await getCompanyProfile(token);

  const content: Record<Locale, AboutPageContent> = {
    id: buildContent("id", profile),
    en: buildContent("en", profile),
  };

  return <AboutEditor initialContent={content} initialMapSrc={profile?.mapSrc ?? mapEmbedSrc} />;
}

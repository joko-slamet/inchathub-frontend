import { cookies } from "next/headers";
import { getSiteContent, type Locale } from "@/content/site-content";
import { SESSION_COOKIE } from "@/lib/session";
import { HomepageEditor, type HomeContent } from "@/components/panel/homepage-editor";
import type { SiteSettingDTO } from "@/lib/site-settings-types";

async function getSiteSettings(token: string): Promise<SiteSettingDTO[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/site-settings`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) return [];
  return res.json();
}

function staticFallback(locale: Locale): HomeContent {
  const c = getSiteContent(locale);
  return {
    hero: c.hero,
    problem: c.problem,
    omnichannel: c.omnichannel,
    aiCrm: c.aiCrm,
    whyChatHub: c.whyChatHub,
    industries: c.industries,
    closingCta: c.closingCta,
    faq: c.faq,
    footer: c.footer,
  };
}

function buildContent(locale: Locale, settings: SiteSettingDTO[]): HomeContent {
  const row = settings.find((s) => s.locale === locale);
  if (!row) return staticFallback(locale);

  return {
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

export default async function AdminHomepagePage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const settings = await getSiteSettings(token);

  const content: Record<Locale, HomeContent> = {
    id: buildContent("id", settings),
    en: buildContent("en", settings),
  };

  return <HomepageEditor initialContent={content} />;
}

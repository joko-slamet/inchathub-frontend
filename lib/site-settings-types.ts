import type { SiteContent } from "@/content/site-content";

export type SiteSettingSections = {
  hero: SiteContent["hero"];
  problem: SiteContent["problem"];
  omnichannel: SiteContent["omnichannel"];
  aiCrm: SiteContent["aiCrm"];
  whyChatHub: SiteContent["whyChatHub"];
  industries: SiteContent["industries"];
  closingCta: SiteContent["closingCta"];
  faq: SiteContent["faq"];
  footer: SiteContent["footer"];
};

export type SiteSettingDTO = SiteSettingSections & {
  id: string;
  locale: string;
  createdAt: string;
  updatedAt: string;
};

// Keyed by locale (e.g. { id: {...}, en: {...} }) — the admin UI always
// saves every locale it has loaded in one go, matching its single "Simpan
// Perubahan" button.
export type SiteSettingInput = Record<string, SiteSettingSections>;

// Content resolver: swap this for a real CMS/admin-panel fetch later without
// touching any component — components only ever receive resolved content as props.

import type { Channel, Locale, SiteContent } from "@/content/types";
import { id } from "@/content/locales/id";
import { en } from "@/content/locales/en";

export type { Channel, Locale, SiteContent } from "@/content/types";
export { locales, defaultLocale, isLocale } from "@/content/types";

const content: Record<Locale, SiteContent> = { id, en };

export function getSiteContent(locale: Locale): SiteContent {
  return content[locale];
}

// Channel names/badges are proper nouns — identical across locales, so they
// live outside the translated content.
export const channels: Channel[] = [
  { name: "WhatsApp", badge: "WA" },
  { name: "Instagram", badge: "IG" },
  { name: "Facebook", badge: "FB" },
  { name: "Telegram", badge: "TG" },
  { name: "Email", badge: "MAIL" },
  { name: "Web Chat", badge: "WEB" },
  { name: "Teams", badge: "TEAMS" },
  { name: "Threads", badge: "TH" },
  { name: "X", badge: "X" },
];

// Client organization names as disclosed in ChatHub's own public company
// profile — proper nouns, identical across locales. No logo artwork is
// reproduced here; see the TODO in industries.tsx for swapping in official
// logo assets once permission is granted per-client.
export const clients: string[] = [
  "RS UNHAS",
  "Kemenkes RSPON Mahar Mardjono",
  "RS Badan Pengusahaan Batam",
  "BP Batam",
  "PT BPR Sumber Dana Mas",
  "BPR Surya Kencana",
  "PT Rifan Financindo Berjangka",
  "Equity World Futures",
  "PT Solid Gold Berjangka",
  "Kontak Perkasa Futures",
  "PT Bestprofit Futures",
];

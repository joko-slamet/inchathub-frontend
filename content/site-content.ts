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

// Google Maps embed for the office address — a URL, not translated copy, so
// it lives outside the locale files alongside the other shared constants.
export const mapEmbedSrc =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4952.5138892206005!2d106.86673169999999!3d-6.2449432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f38cfb1d42fd%3A0x7c4c5900d6315012!2sChat%20Hub%20Indonesia!5e1!3m2!1sen!2sid!4v1783014767833!5m2!1sen!2sid";

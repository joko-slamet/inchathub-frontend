import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Same caveat as app/layout.tsx: this is server-rendered before any
// localStorage locale preference is known, so it always reflects defaultLocale.
const { meta, aboutHero } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  title: `${aboutHero.heading} — ChatHub`,
  description: meta.description,
  openGraph: {
    title: `${aboutHero.heading} — ChatHub`,
    description: meta.ogDescription,
    url: `${siteUrl}/about-us`,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Metadata is static (build/module-load time), so it always reflects the
// default locale for crawlers, unlike the page content itself, which is
// locale-correct on first paint via a server-resolved cookie (app/layout.tsx).
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

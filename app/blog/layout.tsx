import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Metadata is static (build/module-load time), so it always reflects the
// default locale for crawlers, unlike the page content itself, which is
// locale-correct on first paint via a server-resolved cookie (app/layout.tsx).
const { meta, blogHero } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  title: `${blogHero.heading} — ChatHub`,
  description: blogHero.subheading,
  openGraph: {
    title: `${blogHero.heading} — ChatHub`,
    description: meta.ogDescription,
    url: `${siteUrl}/blog`,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}

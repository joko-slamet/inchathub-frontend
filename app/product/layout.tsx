import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Same caveat as app/layout.tsx: this is server-rendered before any
// localStorage locale preference is known, so it always reflects defaultLocale.
const { meta, productHero } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  title: `${productHero.heading} — ChatHub`,
  description: productHero.subheading,
  openGraph: {
    title: `${productHero.heading} — ChatHub`,
    description: meta.ogDescription,
    url: `${siteUrl}/product`,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
};

export default function ProductLayout({ children }: { children: React.ReactNode }) {
  return children;
}

import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Metadata is static (build/module-load time), so it always reflects the
// default locale for crawlers, unlike the page content itself, which is
// locale-correct on first paint via a server-resolved cookie (app/layout.tsx).
const { meta, pricing } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  title: `${pricing.titleMain} ${pricing.titleAccent} — ChatHub Pricing`,
  description: meta.description,
  openGraph: {
    title: `${pricing.titleMain} ${pricing.titleAccent} — ChatHub Pricing`,
    description: meta.ogDescription,
    url: `${siteUrl}/pricing`,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
};

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}

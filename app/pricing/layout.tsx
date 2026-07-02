import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Same caveat as app/layout.tsx: this is server-rendered before any
// localStorage locale preference is known, so it always reflects defaultLocale.
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

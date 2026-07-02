import type { Metadata } from "next";
import { getSiteContent, defaultLocale } from "@/content/site-content";

const siteUrl = "https://chathub.co.id";

// Same caveat as app/layout.tsx: this is server-rendered before any
// localStorage locale preference is known, so it always reflects defaultLocale.
const { meta, contact } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  title: `${contact.titleMain} ${contact.titleAccent} — ChatHub`,
  description: contact.description,
  openGraph: {
    title: `${contact.titleMain} ${contact.titleAccent} — ChatHub`,
    description: meta.ogDescription,
    url: `${siteUrl}/contact-us`,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}

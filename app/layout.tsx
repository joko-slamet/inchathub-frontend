import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { getSiteContent, defaultLocale } from "@/content/site-content";
import { LocaleProvider } from "@/components/locale-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const siteUrl = "https://chathub.co.id";

// Metadata is always rendered server-side for crawlers, before any
// localStorage-based locale preference is known — it reflects the default
// locale only. See components/locale-provider.tsx for the client-side switch.
const { meta } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: meta.title,
  description: meta.description,
  keywords: [
    "omnichannel",
    "AI chatbot",
    "CRM",
    "WhatsApp Business API",
    "unified inbox",
    "customer service",
    "ChatHub",
    "PT Chat Hub Indonesia",
  ],
  authors: [{ name: "PT Chat Hub Indonesia" }],
  openGraph: {
    title: meta.ogTitle,
    description: meta.ogDescription,
    url: siteUrl,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: meta.ogTitle,
    description: meta.twitterDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={defaultLocale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  );
}

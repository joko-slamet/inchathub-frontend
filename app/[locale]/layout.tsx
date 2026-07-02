import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
import { locales, isLocale, getSiteContent, type Locale } from "@/content/site-content";
import "../globals.css";

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

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale: Locale = rawLocale;
  const { meta } = getSiteContent(locale);

  return {
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
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: Object.fromEntries(locales.map((l) => [l, `${siteUrl}/${l}`])),
    },
    openGraph: {
      title: meta.ogTitle,
      description: meta.ogDescription,
      url: `${siteUrl}/${locale}`,
      siteName: "ChatHub",
      locale: locale === "id" ? "id_ID" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: meta.ogTitle,
      description: meta.twitterDescription,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html
      lang={locale}
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}

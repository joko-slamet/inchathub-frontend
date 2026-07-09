import type { Metadata } from "next";
import { cookies, headers } from "next/headers";
import { Plus_Jakarta_Sans, Inter, IBM_Plex_Mono } from "next/font/google";
import { getSiteContent, defaultLocale, isLocale, LOCALE_COOKIE, type Locale } from "@/content/site-content";
import { LocaleProvider } from "@/components/locale-provider";
import { AuthProvider } from "@/components/auth-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { getSession } from "@/lib/session";
import { GoogleAnalytics } from "@/components/analytics/google-analytics";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
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

// Metadata is static (evaluated at build/module-load time, not per-request)
// so it always reflects the default locale — crawlers see Indonesian meta
// tags regardless of a visitor's saved preference. The visible page content
// itself is locale-correct on first paint; see the cookie resolution below.
const { meta } = getSiteContent(defaultLocale);

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: meta.title,
  description: meta.description,
  icons: {
    icon: "/logo.ico",
  },
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

// Resolves the visitor's locale before the first byte is sent: saved cookie
// wins, otherwise a one-time guess from the Accept-Language header (never
// persisted). Because this runs server-side, the server-rendered HTML and
// the client's first paint agree from the start — no flash of the wrong
// locale, unlike the old localStorage-only approach.
async function resolveInitialLocale(): Promise<Locale> {
  const cookieStore = await cookies();
  const stored = cookieStore.get(LOCALE_COOKIE)?.value;
  if (stored && isLocale(stored)) return stored;

  const headerList = await headers();
  const acceptLanguage = headerList.get("accept-language") ?? "";
  if (acceptLanguage.toLowerCase().startsWith("en")) return "en";

  return defaultLocale;
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [initialLocale, session] = await Promise.all([resolveInitialLocale(), getSession()]);

  return (
    <html
      lang={initialLocale}
      className={`${plusJakartaSans.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        <ThemeProvider>
          <AuthProvider user={session ? { role: session.role } : null}>
            <LocaleProvider initialLocale={initialLocale}>{children}</LocaleProvider>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

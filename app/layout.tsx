import type { Metadata } from "next";
import { Space_Grotesk, Inter, IBM_Plex_Mono } from "next/font/google";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "ChatHub — Satu Platform untuk Setiap Percakapan Pelanggan",
  description:
    "ChatHub menyatukan chat dari WhatsApp, Instagram, Facebook, Telegram, Email, dan Web Chat ke dalam satu inbox, dilengkapi AI Chatbot dan Smart CRM. Dipercaya rumah sakit, instansi pemerintah, hingga lembaga keuangan di Indonesia.",
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
    title: "ChatHub — Connecting Conversations. Accelerating Growth.",
    description:
      "Satukan chat dari semua channel pelanggan Anda ke satu inbox. AI Chatbot dan Smart CRM bawaan, siap membantu bisnis merespons lebih cepat dan menutup lebih banyak penjualan.",
    url: siteUrl,
    siteName: "ChatHub",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ChatHub — Connecting Conversations. Accelerating Growth.",
    description:
      "Satu platform omnichannel, AI Chatbot, dan Smart CRM untuk bisnis Indonesia yang kewalahan chat dari banyak kanal.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${inter.variable} ${ibmPlexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        {children}
      </body>
    </html>
  );
}

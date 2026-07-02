import { notFound } from "next/navigation";
import { isLocale, getSiteContent, channels } from "@/content/site-content";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Omnichannel } from "@/components/sections/omnichannel";
import { AiCrm } from "@/components/sections/ai-crm";
import { Whatsapp } from "@/components/sections/whatsapp";
import { Industries } from "@/components/sections/industries";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  if (!isLocale(rawLocale)) notFound();
  const locale = rawLocale;
  const content = getSiteContent(locale);

  return (
    <>
      <Navbar content={content.nav} locale={locale} />
      <main className="flex-1">
        <Hero content={content.hero} channels={channels} />
        <Problem content={content.problem} channels={channels} />
        <Omnichannel content={content.omnichannel} />
        <AiCrm content={content.aiCrm} />
        <Whatsapp content={content.whatsapp} />
        <Industries content={content.industries} />
        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} nav={content.nav} locale={locale} />
    </>
  );
}

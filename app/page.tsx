"use client";

import { getSiteContent, channels, clients } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Omnichannel } from "@/components/sections/omnichannel";
import { AiCrm } from "@/components/sections/ai-crm";
import { WhyChatHub } from "@/components/sections/why-chathub";
import { Pricing } from "@/components/sections/pricing";
import { Industries } from "@/components/sections/industries";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <Hero content={content.hero} channels={channels} />
        <Problem content={content.problem} />
        <Omnichannel content={content.omnichannel} />
        <AiCrm content={content.aiCrm} />
        <WhyChatHub content={content.whyChatHub} />
        <Industries content={content.industries} clients={clients} />
        <Pricing content={content.pricing} />
        <Faq content={content.faq} />
        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

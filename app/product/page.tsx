"use client";

import { LuLayoutGrid } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { Omnichannel } from "@/components/sections/omnichannel";
import { AiCrm } from "@/components/sections/ai-crm";
import { WhyChatHub } from "@/components/sections/why-chathub";
import { Footer } from "@/components/sections/footer";
import { Faq } from "@/components/sections/faq";
import { Problem } from "@/components/sections/problem";

export default function ProductPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero
          icon={LuLayoutGrid}
          heading={content.productHero.heading}
          subheading={content.productHero.subheading}
        />
        <Problem content={content.problem} />
        <Omnichannel content={content.omnichannel} />
        <AiCrm content={content.aiCrm} />
        <WhyChatHub content={content.whyChatHub} />
        <Faq content={content.faq} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

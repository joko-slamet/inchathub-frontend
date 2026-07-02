"use client";

import { LuBuilding2 } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { About } from "@/components/sections/about";
import { WhyChatHub } from "@/components/sections/why-chathub";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";
import { Faq } from "@/components/sections/faq";
import { VisionMission } from "@/components/sections/vision-mission";

export default function AboutUsPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero icon={LuBuilding2} heading={content.aboutHero.heading} />
        <About content={content.about} />
        <VisionMission content={content.visionMission} />
        <WhyChatHub content={content.whyChatHub} />
        <Faq content={content.faq} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

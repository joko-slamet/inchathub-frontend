"use client";

import { LuBuilding2 } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { useSiteSettingContent } from "@/hooks/use-site-settings";
import { useAboutContent, useVisionMissionContent } from "@/hooks/use-company-profile";
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
  const staticContent = getSiteContent(locale);
  const content = useSiteSettingContent(staticContent, locale);
  const about = useAboutContent(staticContent.about, locale);
  const visionMission = useVisionMissionContent(staticContent.visionMission, locale);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero icon={LuBuilding2} heading={content.aboutHero.heading} />
        <About content={about} />
        <VisionMission content={visionMission} />
        <WhyChatHub content={content.whyChatHub} />
        <Faq content={content.faq} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

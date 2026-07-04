"use client";

import { LuMessageCircle } from "react-icons/lu";
import { getSiteContent, mapEmbedSrc } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { useSiteSettingContent } from "@/hooks/use-site-settings";
import { useCompanyMapSrc, useContactInfoCards } from "@/hooks/use-company-profile";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { Contact } from "@/components/sections/contact";
import { Faq } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";

export default function ContactPage() {
  const { locale } = useLocale();
  const staticContent = getSiteContent(locale);
  const content = useSiteSettingContent(staticContent, locale);
  const infoCards = useContactInfoCards(staticContent.contact.infoCards, locale);
  const mapSrc = useCompanyMapSrc(mapEmbedSrc);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero
          icon={LuMessageCircle}
          heading={content.contactHero.heading}
          subheading={content.contactHero.subheading}
        />
        <Contact content={{ ...content.contact, infoCards }} mapSrc={mapSrc} />
        <Faq content={content.faq} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

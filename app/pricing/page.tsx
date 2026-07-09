"use client";

import { LuRocket } from "react-icons/lu";
import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { usePricingContent } from "@/hooks/use-pricing-plans";
import { Navbar } from "@/components/sections/navbar";
import { PageHero } from "@/components/ui/page-hero";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";

export default function PricingPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);
  const pricing = usePricingContent(content.pricing, locale);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PageHero
          icon={LuRocket}
          heading={content.pricingHero.heading}
          subheading={content.pricingHero.subheading}
        />
        <Pricing content={pricing} whatsappPhone={content.closingCta.whatsappPhone} />
        <Faq content={content.faq} />
        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

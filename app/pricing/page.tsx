"use client";

import { getSiteContent } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { Navbar } from "@/components/sections/navbar";
import { PricingHero } from "@/components/sections/pricing-hero";
import { Pricing } from "@/components/sections/pricing";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";

export default function PricingPage() {
  const { locale } = useLocale();
  const content = getSiteContent(locale);

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <PricingHero content={content.pricingHero} />
        <Pricing content={content.pricing} />
        <Faq content={content.faq} />
        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}

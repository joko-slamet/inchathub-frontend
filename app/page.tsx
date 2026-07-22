"use client";

import { getSiteContent, channels } from "@/content/site-content";
import { useLocale } from "@/components/locale-provider";
import { usePricingContent } from "@/hooks/use-pricing-plans";
import { useArticles } from "@/hooks/use-articles";
import { useCompanyLogos } from "@/hooks/use-company-logos";
import { usePromos } from "@/hooks/use-promos";
import { useSiteSettingContent } from "@/hooks/use-site-settings";
import { useVisionMissionContent } from "@/hooks/use-company-profile";
import { toPublicBlogPosts } from "@/lib/blog-format";
import { toPublicPromoCards } from "@/lib/promo-format";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Problem } from "@/components/sections/problem";
import { Omnichannel } from "@/components/sections/omnichannel";
import { AiCrm } from "@/components/sections/ai-crm";
import { WhyChatHub } from "@/components/sections/why-chathub";
import { Pricing } from "@/components/sections/pricing";
import { TryFree } from "@/components/sections/try-free";
import { Promo } from "@/components/sections/promo";
import { Industries } from "@/components/sections/industries";
import { Faq } from "@/components/sections/faq";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Footer } from "@/components/sections/footer";
import { VisionMission } from "@/components/sections/vision-mission";
import { Blog } from "@/components/sections/blog";

export default function Home() {
  const { locale } = useLocale();
  const staticContent = getSiteContent(locale);
  const content = useSiteSettingContent(staticContent, locale);
  const visionMission = useVisionMissionContent(staticContent.visionMission, locale);
  const pricing = usePricingContent(content.pricing, locale);
  const { articles } = useArticles();
  const { logos } = useCompanyLogos();
  const { promos } = usePromos();

  return (
    <>
      <Navbar content={content.nav} />
      <main className="flex-1">
        <Hero content={content.hero} channels={channels} />
        <VisionMission content={visionMission} />
        <Problem content={content.problem} />
        <Omnichannel content={content.omnichannel} />
        <AiCrm content={content.aiCrm} />
        <WhyChatHub content={content.whyChatHub} />
        <Industries content={content.industries} logos={logos ?? []} />
        <TryFree content={content.tryFree} />
        {promos && promos.length > 0 && (
          <Promo content={content.promo} promos={toPublicPromoCards(promos, locale)} limit={3} />
        )}
        <Pricing content={pricing} />
        {articles && articles.length > 0 && (
          <Blog content={{ ...content.blog, posts: toPublicBlogPosts(articles, locale) }} limit={3} />
        )}
        <Faq content={content.faq} />
        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} nav={content.nav} />
    </>
  );
}
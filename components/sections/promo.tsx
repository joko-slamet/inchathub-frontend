import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { PromoGrid } from "@/components/sections/promo-grid";
import { PromoMarquee } from "@/components/sections/promo-marquee";
import type { SiteContent } from "@/content/site-content";
import type { PublicPromoCard } from "@/lib/promo-format";

export function Promo({
  content,
  promos,
  limit,
}: {
  content: SiteContent["promo"];
  promos: PublicPromoCard[];
  limit?: number;
}) {
  // More than 3 promos: switch to an auto-scrolling marquee (same pattern as
  // the client logo strip in industries.tsx) showing every promo, instead of
  // a static grid capped at `limit` — a long static grid doesn't fit well on
  // the landing page once there are more than a handful of promos running.
  const useMarquee = promos.length > 3;
  const shown = useMarquee ? promos : limit ? promos.slice(0, limit) : promos;

  return (
    <Section
      id="promo"
      align="center"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <ScrollReveal delay={0.15} className="mt-12">
        {useMarquee ? <PromoMarquee promos={shown} /> : <PromoGrid promos={shown} />}
      </ScrollReveal>

      {limit !== undefined && (useMarquee || limit < promos.length) && (
        <ScrollReveal delay={0.2} className="mt-10 flex justify-center">
          <Button href="/promo" variant="outline" size="md">
            {content.viewAllLabel}
          </Button>
        </ScrollReveal>
      )}
    </Section>
  );
}

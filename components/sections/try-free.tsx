"use client";

import { LuRocket, LuCheck } from "react-icons/lu";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useTrialUrl } from "@/hooks/use-trial-url";
import type { SiteContent } from "@/content/site-content";

export function TryFree({ content }: { content: SiteContent["tryFree"] }) {
  const trialUrl = useTrialUrl();

  return (
    <Section
      id="coba-gratis"
      align="center"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <ScrollReveal delay={0.15} className="mt-10 flex flex-col items-center gap-6">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {content.bullets.map((bullet) => (
            <span
              key={bullet}
              className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-sm font-medium text-ink/70"
            >
              <LuCheck className="size-4 text-signal" />
              {bullet}
            </span>
          ))}
        </div>

        <Button href={trialUrl} target="_blank" rel="noopener noreferrer" variant="primary" size="lg">
          <LuRocket className="size-4" />
          {content.ctaLabel}
        </Button>
      </ScrollReveal>
    </Section>
  );
}

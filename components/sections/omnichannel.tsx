import {
  LuInbox,
  LuUsers,
  LuHistory,
  LuStickyNote,
  LuTicket,
  LuChartColumn,
  LuShieldCheck,
  LuZap,
  LuSparkles,
  LuTrendingUp,
  LuCheckCheck,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";
import { InboxMockup } from "@/components/sections/inbox-mockup";

// Positional match with omnichannel.features in content/site-content.ts — keep order in sync.
const featureIcons: IconType[] = [LuInbox, LuUsers, LuHistory, LuStickyNote, LuTicket, LuChartColumn, LuShieldCheck];

// Positional match with omnichannel.impact in content/site-content.ts — keep order in sync.
const impactIcons: IconType[] = [LuZap, LuSparkles, LuTrendingUp, LuCheckCheck];

export function Omnichannel({ content }: { content: SiteContent["omnichannel"] }) {
  return (
    <Section
      id="produk"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <div className="grid gap-4 sm:grid-cols-2">
          {content.features.map((feature, index) => {
            const FeatureIcon = featureIcons[index];
            return (
              <ScrollReveal key={feature.title} delay={index * 0.05}>
                <div className="group h-full rounded-xl border border-line bg-paper p-5 transition-all duration-200 hover:-translate-y-1 hover:border-ink/20 hover:shadow-[0_16px_32px_-20px_rgba(20,16,15,0.25)]">
                  <span className="flex size-10 items-center justify-center rounded-lg bg-signal-dim text-signal">
                    <FeatureIcon className="size-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">{feature.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink/65">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15} className="lg:sticky lg:top-24">
          <InboxMockup content={content.inboxMockup} />
        </ScrollReveal>
      </div>

      <ScrollReveal delay={0.1} className="mt-16 border-t border-line pt-10">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {content.impact.map((item, index) => {
            const ImpactIcon = impactIcons[index];
            return (
              <div key={item.label} className="flex flex-col items-start gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg border border-line text-signal">
                  <ImpactIcon className="size-4" />
                </span>
                <p className="text-sm font-medium text-ink/80">{item.label}</p>
              </div>
            );
          })}
        </div>
      </ScrollReveal>
    </Section>
  );
}

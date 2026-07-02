import {
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingBag,
  Landmark,
  HandHeart,
  Building2,
  Truck,
  Clapperboard,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

// Positional match with industries.list in content — keep order in sync.
const industryIcons: LucideIcon[] = [
  GraduationCap,
  HeartPulse,
  Hotel,
  Factory,
  ShoppingBag,
  Landmark,
  HandHeart,
  Building2,
  Truck,
  Clapperboard,
];

export function Industries({
  content,
  clients,
}: {
  content: SiteContent["industries"];
  clients: string[];
}) {
  return (
    <Section
      id="industri"
      align="center"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <ScrollReveal delay={0.1} className="mt-14">
        <div className="grid grid-cols-1 gap-6 border-y border-line py-8 sm:grid-cols-3">
          {content.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold tracking-tight text-signal sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {content.list.map((industry, index) => {
            const IndustryIcon = industryIcons[index];
            return (
              <div
                key={industry.name}
                className="flex flex-col items-center gap-3 rounded-xl border border-line px-4 py-6 text-center transition-colors hover:border-ink/20"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-signal-dim text-signal">
                  <IndustryIcon className="size-5" strokeWidth={1.75} />
                </span>
                <p className="text-xs font-medium text-ink/75 sm:text-sm">{industry.name}</p>
              </div>
            );
          })}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-16">
        <p className="text-center font-mono text-xs tracking-widest text-ink/40 uppercase">
          {content.logoStripLabel}
        </p>
        {/* TODO: replace these name tiles with official client logo artwork once written permission is obtained from each institution/hospital/company. */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {clients.map((clientName) => (
            <div
              key={clientName}
              className="flex h-20 items-center justify-center rounded-lg border border-dashed border-line bg-ink/[0.02] px-3 text-center"
            >
              <span className="text-xs font-medium text-ink/50">{clientName}</span>
            </div>
          ))}
          <div className="flex h-20 items-center justify-center rounded-lg border border-dashed border-line bg-ink/[0.02] px-3 text-center">
            <span className="font-mono text-[0.65rem] tracking-wide text-ink/35 uppercase">
              {content.clientsMoreLabel}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </Section>
  );
}

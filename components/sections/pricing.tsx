import { LuCheck, LuX } from "react-icons/lu";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/content/site-content";

export function Pricing({ content }: { content: SiteContent["pricing"] }) {
  return (
    <Section
      id="harga"
      align="center"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      <div className="mt-14 grid gap-6 lg:grid-cols-4">
        {content.plans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 0.05} className="h-full">
            <div
              className={`flex h-full flex-col overflow-hidden rounded-2xl border bg-paper shadow-[0_20px_60px_-32px_rgba(20,16,15,0.3)] ${
                plan.popular ? "border-signal" : "border-line"
              }`}
            >
              <div
                className={`relative px-6 py-6 text-center ${
                  plan.popular ? "bg-signal text-white" : "bg-ink text-paper"
                }`}
              >
                {plan.popular && (
                  <span className="absolute top-3 right-3 rounded-full bg-white/15 px-2.5 py-1 font-mono text-[0.6rem] tracking-widest uppercase">
                    {content.popularLabel}
                  </span>
                )}
                <p className="font-display text-lg font-semibold">{plan.name}</p>
                <p className={`mt-1 text-xs leading-relaxed ${plan.popular ? "text-white/80" : "text-paper/70"}`}>
                  {plan.tagline}
                </p>
              </div>

              <div className="border-b border-line px-6 py-6 text-center">
                <span className="text-sm text-ink/35 line-through">{plan.originalPrice}</span>
                <div className="mt-1 flex items-baseline justify-center gap-1.5">
                  <span className="font-display text-3xl font-bold tracking-tight text-ink">{plan.price}</span>
                </div>
                <span className="font-mono text-xs text-ink/45">{content.billingSuffix}</span>
              </div>

              <ul className="flex-1 divide-y divide-line px-6">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="flex items-center gap-2.5">
                      {feature.included ? (
                        <LuCheck className="size-4 shrink-0 text-ok" />
                      ) : (
                        <LuX className="size-4 shrink-0 text-ink/25" />
                      )}
                      <span className={`text-sm ${feature.included ? "text-ink/80" : "text-ink/35"}`}>
                        {feature.label}
                      </span>
                    </span>
                    {feature.value && (
                      <span className="shrink-0 font-mono text-xs text-ink/50">{feature.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              <div className="p-6 pt-8">
                <Button
                  href="/#kontak"
                  variant={plan.popular ? "primary" : "outline"}
                  size="md"
                  className="w-full"
                >
                  {content.ctaLabel}
                </Button>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}

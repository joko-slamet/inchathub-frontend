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
              className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 bg-paper transition-transform duration-300 ${
                plan.popular
                  ? "border-signal shadow-[0_28px_64px_-28px_rgba(190,30,45,0.45)] lg:-translate-y-3 lg:hover:-translate-y-4"
                  : "border-line shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)] hover:-translate-y-1"
              }`}
            >
              {plan.popular && (
                <span className="sticker absolute -top-1 right-5 z-10 rounded-full bg-ink px-3 py-1.5 text-[0.65rem] font-bold tracking-wide text-white uppercase shadow-md">
                  {content.popularLabel}
                </span>
              )}
              <div
                className={`relative px-6 py-6 text-center ${
                  plan.popular ? "bg-signal text-white" : "bg-ink text-paper"
                }`}
              >
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
                <span className="text-xs font-medium text-ink/45">{content.billingSuffix}</span>
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
                      <span className="shrink-0 text-xs font-medium text-ink/50">{feature.value}</span>
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

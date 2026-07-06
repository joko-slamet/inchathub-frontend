"use client";

import { motion } from "framer-motion";
import { LuCheck, LuX, LuSparkles, LuArrowRight } from "react-icons/lu";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import type { SiteContent } from "@/content/site-content";

export function Pricing({ content }: { content: SiteContent["pricing"] }) {
  return (
    <Section
      id="harga"
      align="center"
      maxWidth="max-w-7xl"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      {/* Decorative background blobs */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="blob animate-pulse-glow absolute -top-20 left-1/4 size-80 bg-signal-dim/30 blur-3xl" />
        <div className="blob-2 animate-float-slow absolute -bottom-20 right-1/4 size-64 bg-slate-dim/40 blur-2xl" />
      </div>

      <div className="relative mt-14 grid gap-6 lg:grid-cols-4">
        {content.plans.map((plan, index) => (
          <ScrollReveal key={plan.name} delay={index * 0.07} className="h-full">
            <motion.div
              whileHover={plan.popular ? { y: -6, scale: 1.02 } : { y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border-2 bg-paper transition-shadow duration-300 ${
                plan.popular
                  ? "border-signal glow-signal shadow-[0_28px_64px_-28px_rgba(190,30,45,0.45)] lg:-translate-y-3"
                  : "border-line shadow-[0_20px_60px_-32px_rgba(26,22,24,0.3)] hover:border-signal/20 hover:shadow-[0_24px_50px_-28px_rgba(190,30,45,0.2)]"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-1 right-5 z-10 flex items-center gap-1.5 rounded-full bg-gradient-to-r from-signal to-signal/80 px-3 py-1.5 shadow-md">
                  <LuSparkles className="size-3 text-white" />
                  <span className="text-[0.65rem] font-bold tracking-wide text-white uppercase">{content.popularLabel}</span>
                </div>
              )}

              {/* Card header */}
              <div
                className={`relative overflow-hidden px-6 py-6 text-center ${
                  plan.popular ? "bg-signal text-white" : "bg-ink text-paper"
                }`}
              >
                {/* Header shimmer */}
                <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" style={{ animationDuration: "3s" }} />

                <p className="font-display text-lg font-semibold">{plan.name}</p>
                <p className={`mt-1 text-xs leading-relaxed ${plan.popular ? "text-white/80" : "text-paper/70"}`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Price block */}
              <div className="border-b border-line px-6 py-6 text-center">
                <span className="text-sm text-ink/35 line-through">{plan.originalPrice}</span>
                <div className="mt-1 flex items-baseline justify-center gap-1.5">
                  <span className="font-display text-3xl font-bold tracking-tight text-ink">{plan.price}</span>
                </div>
                <span className="text-xs font-medium text-ink/45">{content.billingSuffix}</span>
              </div>

              {/* Features */}
              <ul className="flex-1 divide-y divide-line px-6">
                {plan.features.map((feature) => (
                  <li key={feature.label} className="flex items-center justify-between gap-3 py-2.5">
                    <span className="flex items-center gap-2.5">
                      {feature.included ? (
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ok/10">
                          <LuCheck className="size-3 text-ok" />
                        </span>
                      ) : (
                        <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-ink/5">
                          <LuX className="size-3 text-ink/25" />
                        </span>
                      )}
                      <span className={`text-sm ${feature.included ? "text-ink/80" : "text-ink/35"}`}>
                        {feature.label}
                      </span>
                    </span>
                    {feature.value && (
                      <span className="shrink-0 text-xs font-semibold text-ink/50">{feature.value}</span>
                    )}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="p-6 pt-8">
                <Button
                  href={plan.key ? `/checkout?plan=${plan.key}` : "/#kontak"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="md"
                  className="group w-full"
                >
                  <span className="flex items-center justify-center gap-2">
                    {content.ctaLabel}
                    <LuArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Bottom note */}
      <ScrollReveal delay={0.2} className="mt-10 text-center">
        <p className="text-sm text-ink/40 flex items-center justify-center gap-2">
          <LuSparkles className="size-4 text-signal/50" />
          Semua paket sudah termasuk onboarding & dukungan teknis
        </p>
      </ScrollReveal>
    </Section>
  );
}

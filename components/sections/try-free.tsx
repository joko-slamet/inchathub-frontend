"use client";

import { motion } from "framer-motion";
import { LuRocket, LuCheck } from "react-icons/lu";
import { Eyebrow } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { useTrialUrl } from "@/hooks/use-trial-url";
import type { SiteContent } from "@/content/site-content";

export function TryFree({ content }: { content: SiteContent["tryFree"] }) {
  const trialUrl = useTrialUrl();

  return (
    <section
      id="coba-gratis"
      className="relative scroll-mt-20 overflow-hidden bg-paper px-6 py-20 sm:py-28 md:px-10 lg:px-16"
    >
      {/* Soft red glow behind the card — the pop comes from light and scale, not a solid color block (avoids doubling up with the closing CTA's red panel further down the page) */}
      <div
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute top-1/2 left-1/2 size-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-signal-dim/70 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(var(--color-line) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-signal/15 bg-paper px-6 py-16 text-center shadow-[0_40px_90px_-30px_rgba(190,30,45,0.25)] sm:px-14 sm:py-20">
            {/* Decorative spinning rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-14 -right-14 size-48 animate-spin-slow rounded-full border border-dashed border-signal/15"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-10 -left-10 size-36 animate-spin-reverse-slow rounded-full border border-signal/10"
            />

            <div className="relative flex flex-col items-center">
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex size-16 items-center justify-center rounded-2xl bg-signal-dim text-signal"
              >
                <LuRocket className="size-7" />
              </motion.div>

              <div className="mt-6">
                <Eyebrow>{content.eyebrow}</Eyebrow>
              </div>

              <h2 className="mt-5 max-w-2xl text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl">
                {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
                {content.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
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

              <div className="mt-10 relative group">
                <div className="pointer-events-none absolute -inset-2 rounded-full bg-signal/25 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-100" />
                <Button
                  href={trialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="relative px-9 py-4 text-base"
                >
                  <LuRocket className="size-5" />
                  {content.ctaLabel}
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

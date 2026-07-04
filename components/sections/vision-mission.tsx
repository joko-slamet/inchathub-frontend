"use client";

import { motion } from "framer-motion";
import { LuMountain, LuTarget, LuSparkles } from "react-icons/lu";
import { Eyebrow } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

export function VisionMission({ content }: { content: SiteContent["visionMission"] }) {
  return (
    <section className="relative overflow-hidden bg-paper px-6 py-20 sm:py-28 md:px-10 lg:px-16">
      {/* Background decorative elements */}
      <div
        aria-hidden="true"
        className="blob animate-float-slow pointer-events-none absolute -top-20 right-1/4 size-72 bg-signal-dim/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="blob-2 pointer-events-none absolute -bottom-16 left-1/4 size-56 bg-slate-dim/60 blur-2xl"
      />

      {/* Decorative line accents */}
      <div aria-hidden="true" className="pointer-events-none absolute top-0 left-0 w-full overflow-hidden">
        <svg viewBox="0 0 1200 60" className="w-full opacity-30" preserveAspectRatio="none">
          <path d="M0,30 Q300,0 600,30 T1200,30" stroke="var(--color-signal)" strokeWidth="1" fill="none" strokeDasharray="6 4" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Vision Card */}
        <ScrollReveal>
          <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[2rem] border-2 border-signal/20 bg-gradient-to-br from-signal-dim via-signal-dim/80 to-signal-dim/40 px-8 py-14 shadow-[0_24px_60px_-24px_rgba(190,30,45,0.4)] sm:px-10">
            {/* Animated background rings */}
            <div aria-hidden="true" className="pointer-events-none absolute -right-12 -bottom-12 size-64 animate-spin-slow rounded-full border-2 border-dashed border-signal/10" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-20 -bottom-20 size-96 animate-spin-reverse-slow rounded-full border border-signal/05" />

            {/* Large decorative icon */}
            <LuMountain
              className="pointer-events-none absolute -right-6 -bottom-6 size-48 rotate-6 text-signal/12 animate-float-slow"
              strokeWidth={1}
            />
            <LuSparkles
              className="pointer-events-none absolute top-6 right-6 size-6 text-signal/30 animate-bounce-subtle"
              strokeWidth={1.5}
            />

            {/* Shimmer effect */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[2rem]">
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" style={{ animationDuration: "4s" }} />
            </div>

            <div className="relative">
              <Eyebrow>{content.visionEyebrow}</Eyebrow>
              <p className="mt-4 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl">
                {content.visionMain}{" "}
                <span className="text-gradient animate-gradient">{content.visionAccent}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* Mission List */}
        <ScrollReveal delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <Eyebrow>{content.missionEyebrow}</Eyebrow>
            <LuTarget className="size-4 text-signal animate-pulse" />
          </div>
          <div className="flex flex-col gap-3">
            {content.missionItems.map((item, index) => (
              <motion.div
                key={item.textAccent}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 shadow-[0_14px_36px_-26px_rgba(26,22,24,0.3)] transition-all duration-300 hover:-translate-x-1 hover:border-signal/25 hover:shadow-[0_16px_40px_-20px_rgba(190,30,45,0.2)]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-signal text-xs font-bold text-white shadow-md transition-transform duration-300 group-hover:scale-110">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                  {item.textMain}{" "}
                  <span className="font-semibold text-signal">{item.textAccent}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

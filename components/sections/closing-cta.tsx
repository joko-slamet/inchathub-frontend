"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { LuSend, LuSparkles, LuZap, LuShieldCheck } from "react-icons/lu";
import type { SiteContent } from "@/content/site-content";

const trustBullets = [
  { icon: LuSparkles, text: "Setup dalam 1 hari kerja" },
  { icon: LuZap, text: "Onboarding gratis" },
  { icon: LuShieldCheck, text: "Tanpa kontrak panjang" },
];

export function ClosingCta({ content }: { content: SiteContent["closingCta"] }) {
  return (
    <section
      id="kontak"
      className="relative scroll-mt-20 overflow-hidden bg-signal px-6 py-24 text-paper sm:py-32 md:px-10 lg:px-16"
    >
      {/* Layered background blobs */}
      <div
        aria-hidden="true"
        className="blob animate-pulse-glow pointer-events-none absolute -top-24 -left-24 size-[420px] bg-paper/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="blob-2 animate-float pointer-events-none absolute -right-28 -bottom-28 size-[500px] bg-ink/12 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="blob animate-float-slow pointer-events-none absolute top-1/2 -translate-y-1/2 left-2/3 size-64 bg-paper/8 blur-2xl"
      />

      {/* Decorative grid dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative spinning rings */}
      <div aria-hidden="true" className="pointer-events-none absolute -top-20 right-10 size-72 animate-spin-slow rounded-full border border-dashed border-paper/10" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 left-10 size-48 animate-spin-reverse-slow rounded-full border border-paper/10" />

      {/* Corner accent ornament */}
      <div aria-hidden="true" className="pointer-events-none absolute bottom-8 right-8 grid grid-cols-4 gap-2 opacity-20">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="size-1.5 rounded-full bg-paper" />
        ))}
      </div>

      <ScrollReveal className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        {/* Icon accent */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-paper/15 backdrop-blur-sm"
        >
          <LuSend className="size-7 text-paper" />
        </motion.div>

        <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl leading-tight">{content.title}</h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          {content.subheadline}
        </p>

        {/* Trust bullets */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          {trustBullets.map(({ icon: Icon, text }) => (
            <span key={text} className="flex items-center gap-2 rounded-full bg-paper/10 px-4 py-2 text-xs font-semibold text-paper/85 backdrop-blur-sm border border-paper/10">
              <Icon className="size-3.5" />
              {text}
            </span>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
          {content.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-paper/20 px-4 py-1.5 text-xs font-semibold tracking-wide text-paper/60 uppercase"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10 relative group">
          {/* Animated glow behind button */}
          <div className="absolute -inset-2 rounded-full bg-paper/30 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-60" />
          <Button href="https://wa.me/6281510107070" variant="inverse" size="lg">
            {content.cta}
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}

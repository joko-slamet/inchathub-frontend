"use client";

import { motion } from "framer-motion";
import type { Channel, SiteContent } from "@/content/site-content";
import { Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ChannelBadge } from "@/components/ui/channel-badge";
import { ConvergenceVisual } from "@/components/hero/convergence-visual";

export function Hero({
  content,
  channels,
}: {
  content: SiteContent["hero"];
  channels: Channel[];
}) {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden border-line px-6 pt-10 pb-20 sm:pt-14 md:px-10 md:pb-28 lg:px-16"
      style={{
        backgroundColor: "var(--color-paper)",
        backgroundImage: "radial-gradient(var(--color-line) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
      }}
    >
      <div
        aria-hidden="true"
        className="blob animate-float pointer-events-none absolute -top-24 -right-20 size-[420px] bg-signal-dim/80 blur-2xl sm:size-[520px]"
      />
      <div
        aria-hidden="true"
        className="blob pointer-events-none absolute -bottom-32 -left-24 size-72 bg-slate-dim blur-xl"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-ink sm:text-5xl md:text-[3.4rem]">
            {content.headlineMain}{" "}
            <span className="relative inline-block rotate-[-1deg] text-signal">
              {content.headlineAccent}
              <svg
                className="pointer-events-none absolute top-full left-0 mt-1 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="var(--color-signal)"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h1>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            <span className="font-semibold text-signal">{content.subheadlineAccent}</span>{" "}
            {content.subheadlineMain}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#kontak" variant="primary" size="lg">
              {content.ctaPrimary}
            </Button>
            <Button href="#problem" variant="outline" size="lg">
              {content.ctaSecondary}
            </Button>
          </div>

          <div className="mt-12">
            <p className="text-xs font-semibold tracking-wide text-slate uppercase">
              {content.channelsLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {channels.map((channel) => (
                <ChannelBadge key={channel.badge} channel={channel} size="sm" />
              ))}
            </div>
          </div>
        </motion.div>

        <ConvergenceVisual />
      </div>
    </section>
  );
}

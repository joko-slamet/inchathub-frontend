"use client";

import { motion, type Variants } from "framer-motion";
import type { Channel, SiteContent } from "@/content/site-content";
import { Eyebrow } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { ChannelBadge } from "@/components/ui/channel-badge";
import { ConvergenceVisual } from "@/components/hero/convergence-visual";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
};

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
      {/* Large animated gradient blobs */}
      <div
        aria-hidden="true"
        className="blob animate-pulse-glow pointer-events-none absolute -top-32 -right-24 size-[560px] bg-signal-dim/60 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="blob-2 animate-float-slow pointer-events-none absolute -bottom-40 -left-32 size-[380px] bg-slate-dim/80 blur-2xl"
      />
      <div
        aria-hidden="true"
        className="blob animate-pulse-glow pointer-events-none absolute top-1/2 left-1/3 size-64 bg-signal-dim/30 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      {/* Decorative floating ring */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-16 -right-16 size-[320px] animate-spin-slow rounded-full border border-dashed border-signal/15"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-8 -right-8 size-[220px] animate-spin-reverse-slow rounded-full border border-signal/10"
      />

      {/* Decorative dots pattern corner accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-8 right-8 grid grid-cols-5 gap-2 opacity-20"
      >
        {Array.from({ length: 25 }).map((_, i) => (
          <span key={i} className="size-1.5 rounded-full bg-signal" />
        ))}
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow badge */}
          <motion.div variants={itemVariants}>
            <Eyebrow>{content.eyebrow}</Eyebrow>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={itemVariants}
            className="mt-5 text-4xl leading-[1.05] font-bold text-ink sm:text-5xl md:text-[3.4rem]"
          >
            {content.headlineMain}{" "}
            <span className="relative inline-block rotate-[-1deg]">
              <span className="text-gradient animate-gradient">{content.headlineAccent}</span>
              <svg
                className="pointer-events-none absolute top-full left-0 mt-1 w-full"
                viewBox="0 0 200 12"
                fill="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 9C40 2 160 2 198 9"
                  stroke="var(--color-signal)"
                  strokeWidth="4"
                  strokeLinecap="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                />
              </svg>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg"
          >
            <span className="font-semibold text-signal">{content.subheadlineAccent}</span>{" "}
            {content.subheadlineMain}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-signal to-signal/60 opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60" />
              <Button href="#kontak" variant="primary" size="lg">
                {content.ctaPrimary}
              </Button>
            </div>
            <Button href="#problem" variant="outline" size="lg">
              {content.ctaSecondary}
            </Button>
          </motion.div>

          {/* Channels */}
          <motion.div variants={itemVariants} className="mt-12">
            <p className="text-xs font-semibold tracking-wide text-slate uppercase">
              {content.channelsLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {channels.map((channel, i) => (
                <motion.div
                  key={channel.badge}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                >
                  <ChannelBadge channel={channel} size="sm" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social proof stat strip */}
          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-6 border-t border-dashed border-line pt-8"
          >
            {[
              { value: "500+", label: "Bisnis aktif" },
              { value: "10jt+", label: "Pesan/bulan" },
              { value: "98%", label: "Uptime SLA" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="font-display text-2xl font-bold text-signal leading-none">{stat.value}</span>
                <span className="text-xs text-ink/50 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <ConvergenceVisual />
      </div>
    </section>
  );
}

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
    <section id="beranda" className="relative overflow-hidden border-b border-line bg-paper px-6 pt-14 pb-20 sm:pt-20 md:px-10 md:pb-28 lg:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_1fr] lg:gap-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl md:text-[3.25rem]">
            {content.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-ink/70 sm:text-lg">
            {content.subheadline}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#kontak" variant="primary" size="lg">
              {content.ctaPrimary}
            </Button>
            <Button href="#produk" variant="outline" size="lg">
              {content.ctaSecondary}
            </Button>
          </div>

          <div className="mt-12">
            <p className="font-mono text-xs tracking-wide text-ink/45 uppercase">
              {content.channelsLabel}
            </p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-3">
              {channels.map((channel) => (
                <ChannelBadge key={channel.badge} channel={channel} size="sm" />
              ))}
            </div>
          </div>
        </motion.div>

        <ConvergenceVisual inboxCard={content.inboxCard} />
      </div>
    </section>
  );
}

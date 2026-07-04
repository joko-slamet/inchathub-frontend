"use client";

import { motion } from "framer-motion";
import {
  LuInbox,
  LuUsers,
  LuHistory,
  LuStickyNote,
  LuTicket,
  LuChartColumn,
  LuShieldCheck,
  LuZap,
  LuSparkles,
  LuTrendingUp,
  LuCheckCheck,
  LuArrowUpRight,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";
import { InboxMockup } from "@/components/sections/inbox-mockup";

// Positional match with omnichannel.features in content/site-content.ts — keep order in sync.
const featureIcons: IconType[] = [LuInbox, LuUsers, LuHistory, LuTicket, LuChartColumn, LuShieldCheck];

// Positional match with omnichannel.impact in content/site-content.ts — keep order in sync.
const impactIcons: IconType[] = [LuZap, LuSparkles, LuTrendingUp, LuCheckCheck];

const impactColors = [
  "from-yellow-50 to-amber-50 border-amber-200 text-amber-600",
  "from-purple-50 to-violet-50 border-violet-200 text-violet-600",
  "from-emerald-50 to-green-50 border-green-200 text-emerald-600",
  "from-sky-50 to-blue-50 border-blue-200 text-sky-600",
];

export function Omnichannel({ content }: { content: SiteContent["omnichannel"] }) {
  return (
    <Section
      id="produk"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        {/* Feature Cards */}
        <div className="grid gap-4 sm:grid-cols-2">
          {content.features.map((feature, index) => {
            const FeatureIcon = featureIcons[index];
            return (
              <ScrollReveal key={feature.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-line bg-paper p-5 shadow-[0_8px_24px_-12px_rgba(26,22,24,0.2)]"
                >
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-signal-dim/0 to-signal-dim/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Shimmer */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:translate-x-full group-hover:opacity-100" />

                  <div className="relative">
                    <span className="flex size-10 items-center justify-center rounded-full bg-signal-dim text-signal shadow-sm group-hover:shadow-md transition-shadow duration-300">
                      <FeatureIcon className="size-5" />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-ink group-hover:text-signal transition-colors duration-200">
                      {feature.title}
                    </h3>
                    <LuArrowUpRight className="absolute right-0 bottom-0 size-4 text-signal/0 transition-all duration-300 group-hover:text-signal/60 group-hover:-translate-y-1 group-hover:translate-x-0" />
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.15} className="lg:sticky lg:top-24">
          <div className="relative">
            {/* Decorative glow behind mockup */}
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-signal-dim/50 to-transparent blur-xl pointer-events-none" />
            <div className="relative">
              <InboxMockup content={content.inboxMockup} />
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Impact Stats Strip */}
      <ScrollReveal delay={0.1} className="mt-16 border-t-2 border-dashed border-line pt-10">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {content.impact.map((item, index) => {
            const ImpactIcon = impactIcons[index];
            const colorClass = impactColors[index];
            return (
              <motion.div
                key={item.label}
                whileHover={{ y: -4, scale: 1.04 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`flex flex-col items-start gap-3 rounded-2xl border bg-gradient-to-br p-4 transition-shadow duration-300 hover:shadow-md ${colorClass}`}
              >
                <span className="flex size-9 items-center justify-center rounded-full bg-white shadow-sm">
                  <ImpactIcon className="size-4" />
                </span>
                <p className="text-sm font-medium text-ink/80">{item.label}</p>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>
    </Section>
  );
}

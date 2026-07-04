"use client";

import { motion } from "framer-motion";
import { LuLightbulb, LuHeadset, LuReceipt, LuMaximize2, LuBadgePercent, LuStar } from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

// Positional match with whyChatHub.points in content — keep order in sync.
const pointIcons: IconType[] = [LuLightbulb, LuHeadset, LuReceipt, LuMaximize2, LuBadgePercent];

const cardAccents = [
  "from-yellow-50 border-yellow-200/80 hover:border-yellow-300",
  "from-sky-50 border-sky-200/80 hover:border-sky-300",
  "from-emerald-50 border-emerald-200/80 hover:border-emerald-300",
  "from-purple-50 border-purple-200/80 hover:border-purple-300",
  "from-signal-dim border-signal/15 hover:border-signal/30",
];

const iconColors = [
  "bg-yellow-100 text-yellow-600",
  "bg-sky-100 text-sky-600",
  "bg-emerald-100 text-emerald-600",
  "bg-purple-100 text-purple-600",
  "bg-signal-dim text-signal",
];

export function WhyChatHub({ content }: { content: SiteContent["whyChatHub"] }) {
  return (
    <Section
      id="kenapa-chathub"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      {/* Stars / rating ornament */}
      <ScrollReveal delay={0.05}>
        <div className="mb-8 flex items-center gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 + i * 0.07, type: "spring", stiffness: 400 }}
            >
              <LuStar className="size-5 fill-amber-400 text-amber-400" />
            </motion.div>
          ))}
          <span className="ml-1 text-sm font-medium text-ink/60">Dipercaya ratusan bisnis Indonesia</span>
        </div>
      </ScrollReveal>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {content.points.map((point, index) => {
          const PointIcon = pointIcons[index];
          const accentClass = cardAccents[index];
          const iconClass = iconColors[index];
          return (
            <ScrollReveal key={point.title} delay={index * 0.06} className="h-full">
              <motion.div
                whileHover={{ y: -8, rotateZ: index % 2 === 0 ? 0.5 : -0.5 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className={`group relative flex h-full flex-col gap-3 overflow-hidden rounded-2xl border bg-gradient-to-b p-6 shadow-[0_8px_24px_-12px_rgba(26,22,24,0.2)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-18px_rgba(190,30,45,0.25)] ${accentClass}`}
              >
                {/* Decorative number watermark */}
                <span className="pointer-events-none absolute -right-1 -bottom-3 font-display text-[5rem] font-black leading-none text-ink/[0.04] select-none">
                  {index + 1}
                </span>

                <span className={`flex size-10 items-center justify-center rounded-full ${iconClass} transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                  <PointIcon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-ink sm:text-base leading-snug">{point.title}</p>
                <p className="text-sm leading-relaxed text-ink/65">{point.description}</p>

                {/* Bottom shimmer line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden rounded-b-2xl">
                  <div className="h-full -translate-x-full bg-gradient-to-r from-transparent via-signal/40 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </div>
              </motion.div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LuTriangleAlert, LuTrendingDown, LuClock, LuArrowRight } from "react-icons/lu";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

const painPoints = [
  { icon: LuTriangleAlert, color: "text-amber-500 dark:text-amber-400", bg: "bg-amber-50 border-amber-200 dark:bg-amber-950/20 dark:border-amber-800/40" },
  { icon: LuTrendingDown, color: "text-red-500 dark:text-red-400", bg: "bg-red-50 border-red-200 dark:bg-red-950/20 dark:border-red-800/40" },
  { icon: LuClock, color: "text-orange-500 dark:text-orange-400", bg: "bg-orange-50 border-orange-200 dark:bg-orange-950/20 dark:border-orange-800/40" },
];

export function Problem({ content }: { content: SiteContent["problem"] }) {
  return (
    <Section
      id="how-it-works"
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      {/* Pain point mini cards above the diagram */}
      <ScrollReveal delay={0.1}>
        <div className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {painPoints.map(({ icon: Icon, color, bg }, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center gap-3 rounded-2xl border p-4 ${bg} transition-shadow duration-300 hover:shadow-md`}
            >
              <span className={`flex size-9 shrink-0 items-center justify-center rounded-xl bg-white dark:bg-ink/40 shadow-sm`}>
                <Icon className={`size-5 ${color}`} />
              </span>
              <div className="flex items-center gap-2">
                <LuArrowRight className="size-3 text-ink/30 shrink-0" />
                <p className="text-xs font-medium text-ink/70">{content.points[i]}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </ScrollReveal>

      <div className="mt-4">
        <ScrollReveal delay={0.2}>
          {/* Diagram with decorative frame */}
          <div className="relative group">
            {/* Animated glow behind image */}
            <div className="pointer-events-none absolute -inset-2 rounded-[2.2rem] bg-gradient-to-br from-signal/10 via-signal-dim to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Corner accent ornaments */}
            <div className="absolute -top-3 -left-3 size-10 rounded-tl-2xl border-t-2 border-l-2 border-signal/30 pointer-events-none" />
            <div className="absolute -top-3 -right-3 size-10 rounded-tr-2xl border-t-2 border-r-2 border-signal/30 pointer-events-none" />
            <div className="absolute -bottom-3 -left-3 size-10 rounded-bl-2xl border-b-2 border-l-2 border-signal/30 pointer-events-none" />
            <div className="absolute -bottom-3 -right-3 size-10 rounded-br-2xl border-b-2 border-r-2 border-signal/30 pointer-events-none" />

            <Image
              src="/images/diagram-white.png"
              alt="Diagram alur channel WhatsApp, Instagram, Facebook, Telegram, Email, Website Chat, Teams, Threads, dan X masuk ke platform ChatHub, lalu terdistribusi ke tim Customer Service, Sales, Marketing, Management, AI Assistant, dan Analytics"
              width={1365}
              height={768}
              className="relative h-auto w-full rounded-[2rem] border-2 border-line shadow-[0_24px_64px_-32px_rgba(26,22,24,0.3)] transition-transform duration-500 group-hover:scale-[1.005]"
            />

            {/* Overlay badge */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
              <span className="flex items-center gap-2 rounded-full border border-line bg-paper/95 px-5 py-2 text-xs font-semibold text-ink/70 shadow-lg backdrop-blur-sm">
                <span className="size-2 rounded-full bg-ok animate-pulse" />
                Semua terhubung dalam satu platform
              </span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

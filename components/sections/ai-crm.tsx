"use client";

import { motion } from "framer-motion";
import {
  LuBot,
  LuFilter,
  LuCircleHelp,
  LuSmartphone,
  LuBookOpen,
  LuUserCheck,
  LuUsers,
  LuRoute,
  LuWorkflow,
  LuListChecks,
  LuBell,
  LuChartColumn,
  LuSparkles,
  LuBrain,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

// Positional match with aiCrm.chatbot.points in content — keep order in sync.
const chatbotIcons: IconType[] = [LuBot, LuFilter, LuCircleHelp, LuSmartphone, LuBookOpen, LuUserCheck];

// Positional match with aiCrm.crm.points in content — keep order in sync.
const crmIcons: IconType[] = [LuUsers, LuRoute, LuWorkflow, LuListChecks, LuBell, LuChartColumn];

function PointList({
  points,
  icons,
}: {
  points: SiteContent["aiCrm"]["chatbot"]["points"];
  icons: IconType[];
}) {
  return (
    <ul className="space-y-4">
      {points.map((point, index) => {
        const PointIcon = icons[index];
        return (
          <motion.li
            key={point.title}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="group flex items-start gap-3.5"
          >
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-signal-dim text-signal transition-all duration-300 group-hover:bg-signal group-hover:text-white group-hover:shadow-md">
              <PointIcon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{point.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/65">{point.description}</p>
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

export function AiCrm({ content }: { content: SiteContent["aiCrm"] }) {
  return (
    <Section
      id="solusi"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Chatbot Card */}
        <ScrollReveal className="h-full">
          <div className="group relative flex h-full flex-col gap-8 overflow-hidden rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.25)] transition-all duration-500 hover:border-signal/20 hover:shadow-[0_28px_70px_-30px_rgba(190,30,45,0.25)] sm:p-8">
            {/* Background gradient blob */}
            <div className="pointer-events-none absolute -top-10 -right-10 size-40 rounded-full bg-signal-dim/50 blur-2xl transition-all duration-500 group-hover:size-52 group-hover:bg-signal-dim/70" />

            {/* Decorative icon */}
            <LuBot className="pointer-events-none absolute top-6 right-6 size-24 rotate-6 text-signal/6 animate-float-slow" strokeWidth={1} />

            {/* Header */}
            <div className="relative flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-gradient-to-br from-signal to-signal/70 text-white shadow-md glow-signal">
                <LuBrain className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{content.chatbot.title}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="size-1.5 rounded-full bg-ok animate-pulse" />
                  <span className="text-xs text-ok font-medium">AI-Powered</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <PointList points={content.chatbot.points} icons={chatbotIcons} />
            </div>

            {/* Shimmer accent at bottom */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-[1.75rem]">
              <div className="h-full w-full animate-gradient bg-gradient-to-r from-signal/0 via-signal/40 to-signal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </ScrollReveal>

        {/* CRM Card */}
        <ScrollReveal delay={0.1} className="h-full">
          <div className="group relative flex h-full flex-col gap-8 overflow-hidden rounded-[1.75rem] border-2 border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.25)] transition-all duration-500 hover:border-signal/20 hover:shadow-[0_28px_70px_-30px_rgba(190,30,45,0.25)] sm:p-8">
            {/* Background gradient blob */}
            <div className="pointer-events-none absolute -bottom-10 -left-10 size-40 rounded-full bg-slate-dim/60 blur-2xl transition-all duration-500 group-hover:size-52" />

            {/* Decorative rotating rings */}
            <div className="pointer-events-none absolute -right-8 -bottom-8 size-36 rounded-full border border-dashed border-line animate-spin-slow" />

            {/* Decorative sparkle */}
            <LuSparkles className="pointer-events-none absolute top-6 right-6 size-6 text-signal/15 animate-bounce-subtle" />

            {/* Header */}
            <div className="relative flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-2xl bg-ink text-white shadow-md">
                <LuUsers className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-xl font-semibold text-ink">{content.crm.title}</h3>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="size-1.5 rounded-full bg-signal animate-pulse" />
                  <span className="text-xs text-signal font-medium">Smart CRM</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <PointList points={content.crm.points} icons={crmIcons} />
            </div>

            {/* Bottom accent */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1 overflow-hidden rounded-b-[1.75rem]">
              <div className="h-full w-full animate-gradient bg-gradient-to-r from-signal/0 via-signal/40 to-signal/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

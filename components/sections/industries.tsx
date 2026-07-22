"use client";

import { motion } from "framer-motion";
import {
  LuGraduationCap,
  LuHeartPulse,
  LuHotel,
  LuFactory,
  LuShoppingBag,
  LuLandmark,
  LuHandHeart,
  LuBuilding2,
  LuTruck,
  LuClapperboard,
} from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";
import type { CompanyLogoDTO } from "@/lib/company-logo-types";
import { toCompanyLogoImageUrl } from "@/lib/company-logo-image";

// Positional match with industries.list in content — keep order in sync.
const industryIcons: IconType[] = [
  LuGraduationCap,
  LuHeartPulse,
  LuHotel,
  LuFactory,
  LuShoppingBag,
  LuLandmark,
  LuHandHeart,
  LuBuilding2,
  LuTruck,
  LuClapperboard,
];

const industryColors: { gradient: string; border: string; text: string; bg: string }[] = [
  { gradient: "from-blue-50 dark:from-blue-950/30", border: "border-blue-200/60 dark:border-blue-800/40", text: "text-blue-600 dark:text-blue-400", bg: "bg-blue-100 dark:bg-blue-900/40" },
  { gradient: "from-red-50 dark:from-red-950/30", border: "border-red-200/60 dark:border-red-800/40", text: "text-red-600 dark:text-red-400", bg: "bg-red-100 dark:bg-red-900/40" },
  { gradient: "from-amber-50 dark:from-amber-950/30", border: "border-amber-200/60 dark:border-amber-800/40", text: "text-amber-600 dark:text-amber-400", bg: "bg-amber-100 dark:bg-amber-900/40" },
  { gradient: "from-slate-50 dark:from-slate-800/30", border: "border-slate-200/60 dark:border-slate-700/40", text: "text-slate-600 dark:text-slate-400", bg: "bg-slate-100 dark:bg-slate-800/40" },
  { gradient: "from-purple-50 dark:from-purple-950/30", border: "border-purple-200/60 dark:border-purple-800/40", text: "text-purple-600 dark:text-purple-400", bg: "bg-purple-100 dark:bg-purple-900/40" },
  { gradient: "from-emerald-50 dark:from-emerald-950/30", border: "border-emerald-200/60 dark:border-emerald-800/40", text: "text-emerald-600 dark:text-emerald-400", bg: "bg-emerald-100 dark:bg-emerald-900/40" },
  { gradient: "from-pink-50 dark:from-pink-950/30", border: "border-pink-200/60 dark:border-pink-800/40", text: "text-pink-600 dark:text-pink-400", bg: "bg-pink-100 dark:bg-pink-900/40" },
  { gradient: "from-sky-50 dark:from-sky-950/30", border: "border-sky-200/60 dark:border-sky-800/40", text: "text-sky-600 dark:text-sky-400", bg: "bg-sky-100 dark:bg-sky-900/40" },
  { gradient: "from-orange-50 dark:from-orange-950/30", border: "border-orange-200/60 dark:border-orange-800/40", text: "text-orange-600 dark:text-orange-400", bg: "bg-orange-100 dark:bg-orange-900/40" },
  { gradient: "from-violet-50 dark:from-violet-950/30", border: "border-violet-200/60 dark:border-violet-800/40", text: "text-violet-600 dark:text-violet-400", bg: "bg-violet-100 dark:bg-violet-900/40" },
];

export function Industries({
  content,
  logos,
}: {
  content: SiteContent["industries"];
  logos: CompanyLogoDTO[];
}) {
  return (
    <Section
      id="industri"
      align="center"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <ScrollReveal delay={0.15} className="mt-12">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {content.list.map((industry, index) => {
            const IndustryIcon = industryIcons[index];
            const { gradient: gradientClass, border: borderClass, text: textClass, bg: bgClass } = industryColors[index];
            return (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{
                  y: -8,
                  scale: 1.05,
                  transition: { type: "spring", stiffness: 350, damping: 18 },
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group flex flex-col items-center gap-3 rounded-2xl border bg-gradient-to-b px-4 py-6 text-center transition-shadow duration-300 hover:shadow-lg ${gradientClass} ${borderClass}`}
              >
                <span className={`flex size-11 items-center justify-center rounded-full ${bgClass} transition-transform duration-300 group-hover:rotate-12`}>
                  <IndustryIcon className={`size-5 ${textClass}`} />
                </span>
                <p className="text-xs font-semibold text-ink/75 sm:text-sm leading-tight">{industry.name}</p>
              </motion.div>
            );
          })}
        </div>
      </ScrollReveal>

      {/* Trusted-by client logo strip */}
      {logos.length > 0 && (
        <ScrollReveal delay={0.2} className="mt-16 text-center">
          <p className="text-xs font-semibold tracking-[0.06em] text-ink/45 uppercase">
            {content.logoStripLabel}
          </p>
          <div className="relative left-1/2 mt-6 w-screen -translate-x-1/2 overflow-hidden">
            <div className="marquee-track flex w-max items-center gap-16">
              {[...logos, ...logos].map((logo, index) => (
                // eslint-disable-next-line @next/next/no-img-element -- logo host is
                // the backend's own origin, resolved at runtime via env var.
                <img
                  key={`${logo.id}-${index}`}
                  src={toCompanyLogoImageUrl(logo.imageUrl)}
                  alt={logo.name}
                  className="h-20 w-auto shrink-0 object-contain transition-all duration-300 hover:scale-105 sm:h-24"
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      )}
    </Section>
  );
}

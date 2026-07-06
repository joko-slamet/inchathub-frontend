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

const industryColors = [
  "from-blue-50 border-blue-200/60 text-blue-600 bg-blue-100",
  "from-red-50 border-red-200/60 text-red-600 bg-red-100",
  "from-amber-50 border-amber-200/60 text-amber-600 bg-amber-100",
  "from-slate-50 border-slate-200/60 text-slate-600 bg-slate-100",
  "from-purple-50 border-purple-200/60 text-purple-600 bg-purple-100",
  "from-emerald-50 border-emerald-200/60 text-emerald-600 bg-emerald-100",
  "from-pink-50 border-pink-200/60 text-pink-600 bg-pink-100",
  "from-sky-50 border-sky-200/60 text-sky-600 bg-sky-100",
  "from-orange-50 border-orange-200/60 text-orange-600 bg-orange-100",
  "from-violet-50 border-violet-200/60 text-violet-600 bg-violet-100",
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
            const [gradientClass, borderClass, textClass, bgClass] = industryColors[index].split(" ");
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
          <div className="mt-6 overflow-hidden">
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

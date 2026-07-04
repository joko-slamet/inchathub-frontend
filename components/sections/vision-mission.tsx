import { LuMountain } from "react-icons/lu";
import { Eyebrow } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

export function VisionMission({ content }: { content: SiteContent["visionMission"] }) {
  return (
    <section className="bg-paper px-6 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-[2rem] border-2 border-signal/15 bg-signal-dim px-8 py-14 shadow-[0_20px_50px_-24px_rgba(190,30,45,0.35)] sm:px-10">
            <LuMountain
              className="pointer-events-none absolute -right-8 -bottom-8 size-52 rotate-6 text-signal/10"
              strokeWidth={1}
            />
            <div className="relative">
              <Eyebrow>{content.visionEyebrow}</Eyebrow>
              <p className="mt-4 font-display text-3xl leading-tight font-bold text-ink sm:text-4xl">
                {content.visionMain} <span className="text-signal">{content.visionAccent}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Eyebrow>{content.missionEyebrow}</Eyebrow>
          <div className="mt-6 flex flex-col gap-3">
            {content.missionItems.map((item, index) => (
              <div
                key={item.textAccent}
                className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 shadow-[0_14px_36px_-26px_rgba(26,22,24,0.3)]"
              >
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-signal text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p className="text-sm leading-relaxed text-ink/80 sm:text-base">
                  {item.textMain} <span className="font-semibold text-signal">{item.textAccent}</span>
                </p>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

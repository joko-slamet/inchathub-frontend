import { LuMountain } from "react-icons/lu";
import { Eyebrow } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

export function VisionMission({ content }: { content: SiteContent["visionMission"] }) {
  return (
    <section className="bg-paper px-6 py-20 sm:py-28 md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal>
          <div className="relative flex h-full flex-col justify-center overflow-hidden rounded-2xl border border-signal/20 bg-signal-dim px-8 py-14 sm:px-10">
            <LuMountain
              className="pointer-events-none absolute -right-8 -bottom-8 size-52 text-signal/10"
              strokeWidth={1}
            />
            <div className="relative">
              <Eyebrow>{content.visionEyebrow}</Eyebrow>
              <p className="mt-4 font-display text-3xl leading-tight font-bold tracking-tight text-ink sm:text-4xl">
                {content.visionMain} <span className="text-signal">{content.visionAccent}</span>
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <Eyebrow>{content.missionEyebrow}</Eyebrow>
          <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-paper">
            {content.missionItems.map((item, index) => (
              <div key={item.textAccent} className="flex items-start gap-4 p-5">
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-signal font-mono text-xs font-semibold text-white">
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

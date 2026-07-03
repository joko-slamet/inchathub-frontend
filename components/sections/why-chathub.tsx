import { LuLightbulb, LuHeadset, LuReceipt, LuMaximize2, LuBadgePercent } from "react-icons/lu";
import type { IconType } from "react-icons";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

// Positional match with whyChatHub.points in content — keep order in sync.
const pointIcons: IconType[] = [LuLightbulb, LuHeadset, LuReceipt, LuMaximize2, LuBadgePercent];

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
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {content.points.map((point, index) => {
          const PointIcon = pointIcons[index];
          return (
            <ScrollReveal key={point.title} delay={index * 0.05} className="h-full">
              <div
                className={`${
                  index % 2 === 0 ? "tilt-hover" : "tilt-hover-r"
                } flex h-full flex-col gap-3 rounded-2xl border border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(26,22,24,0.25)] transition-shadow duration-300 hover:shadow-[0_20px_45px_-24px_rgba(190,30,45,0.3)]`}
              >
                <span className="flex size-10 items-center justify-center rounded-full bg-signal-dim text-signal">
                  <PointIcon className="size-5" />
                </span>
                <p className="text-sm font-semibold text-ink sm:text-base">{point.title}</p>
                <p className="text-sm leading-relaxed text-ink/65">{point.description}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>
    </Section>
  );
}

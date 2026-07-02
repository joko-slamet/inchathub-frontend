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
          <li key={point.title} className="flex items-start gap-3.5">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal">
              <PointIcon className="size-4" />
            </span>
            <div>
              <p className="text-sm font-semibold text-ink">{point.title}</p>
              <p className="mt-0.5 text-sm leading-relaxed text-ink/65">{point.description}</p>
            </div>
          </li>
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
      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-12">
        <ScrollReveal className="h-full">
          <div className="flex h-full flex-col gap-8 rounded-2xl border border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(20,16,15,0.25)] sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{content.chatbot.title}</h3>
              <div className="mt-6">
                <PointList points={content.chatbot.points} icons={chatbotIcons} />
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1} className="h-full">
          <div className="flex h-full flex-col gap-8 rounded-2xl border border-line bg-paper p-6 shadow-[0_20px_60px_-32px_rgba(20,16,15,0.25)] sm:p-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{content.crm.title}</h3>
              <div className="mt-6">
                <PointList points={content.crm.points} icons={crmIcons} />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

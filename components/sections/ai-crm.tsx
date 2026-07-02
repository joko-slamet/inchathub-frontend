import {
  Bot,
  Filter,
  HelpCircle,
  Smartphone,
  BookOpen,
  UserCheck,
  Users,
  Route,
  Workflow,
  ListChecks,
  Bell,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { aiCrm } from "@/content/site-content";
import { ChatWidgetMockup } from "@/components/sections/chat-widget-mockup";
import { PipelineMockup } from "@/components/sections/pipeline-mockup";

// Positional match with aiCrm.chatbot.points in content/site-content.ts — keep order in sync.
const chatbotIcons: LucideIcon[] = [Bot, Filter, HelpCircle, Smartphone, BookOpen, UserCheck];

// Positional match with aiCrm.crm.points in content/site-content.ts — keep order in sync.
const crmIcons: LucideIcon[] = [Users, Route, Workflow, ListChecks, Bell, BarChart3];

function PointList({
  points,
  icons,
}: {
  points: typeof aiCrm.chatbot.points;
  icons: LucideIcon[];
}) {
  return (
    <ul className="space-y-4">
      {points.map((point, index) => {
        const PointIcon = icons[index];
        return (
          <li key={point.title} className="flex items-start gap-3.5">
            <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal">
              <PointIcon className="size-4" strokeWidth={1.75} />
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

export function AiCrm() {
  return (
    <Section
      id="solusi"
      eyebrow={aiCrm.eyebrow}
      title={aiCrm.title}
      description={aiCrm.description}
    >
      <div className="mt-14 grid gap-14 lg:grid-cols-2 lg:gap-12">
        <ScrollReveal>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{aiCrm.chatbot.title}</h3>
              <div className="mt-6">
                <PointList points={aiCrm.chatbot.points} icons={chatbotIcons} />
              </div>
            </div>
            <ChatWidgetMockup />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink">{aiCrm.crm.title}</h3>
              <div className="mt-6">
                <PointList points={aiCrm.crm.points} icons={crmIcons} />
              </div>
            </div>
            <PipelineMockup />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

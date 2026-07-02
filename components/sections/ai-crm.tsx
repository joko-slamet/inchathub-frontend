import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Icon } from "@/components/ui/icon-map";
import { aiCrm } from "@/content/site-content";
import { ChatWidgetMockup } from "@/components/sections/chat-widget-mockup";
import { PipelineMockup } from "@/components/sections/pipeline-mockup";

function PointList({ points }: { points: typeof aiCrm.chatbot.points }) {
  return (
    <ul className="space-y-4">
      {points.map((point) => (
        <li key={point.title} className="flex items-start gap-3.5">
          <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal">
            <Icon name={point.icon} className="size-4" />
          </span>
          <div>
            <p className="text-sm font-semibold text-ink">{point.title}</p>
            <p className="mt-0.5 text-sm leading-relaxed text-ink/65">{point.description}</p>
          </div>
        </li>
      ))}
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
                <PointList points={aiCrm.chatbot.points} />
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
                <PointList points={aiCrm.crm.points} />
              </div>
            </div>
            <PipelineMockup />
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

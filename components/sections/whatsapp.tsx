import { ShieldCheck, Bot, Workflow, Inbox, HandHeart, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";
import { WhatsappChatMockup } from "@/components/sections/whatsapp-chat-mockup";

// Positional match with whatsapp.points in content — keep order in sync.
const pointIcons: LucideIcon[] = [ShieldCheck, Bot, Workflow, Inbox, HandHeart];

export function Whatsapp({ content }: { content: SiteContent["whatsapp"] }) {
  return (
    <Section
      id="whatsapp"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <ul className="space-y-5">
            {content.points.map((point, index) => {
              const PointIcon = pointIcons[index];
              return (
                <li key={point.title} className="flex items-start gap-3.5">
                  <span className="mt-0.5 flex size-9 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal">
                    <PointIcon className="size-4" strokeWidth={1.75} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink sm:text-base">{point.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-ink/65">{point.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <WhatsappChatMockup content={content.chatMockup} />
        </ScrollReveal>
      </div>
    </Section>
  );
}

import { ShieldCheck, Bot, Workflow, Inbox, HandHeart, type LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { whatsapp } from "@/content/site-content";
import { WhatsappChatMockup } from "@/components/sections/whatsapp-chat-mockup";

// Positional match with whatsapp.points in content/site-content.ts — keep order in sync.
const pointIcons: LucideIcon[] = [ShieldCheck, Bot, Workflow, Inbox, HandHeart];

export function Whatsapp() {
  return (
    <Section
      id="whatsapp"
      eyebrow={whatsapp.eyebrow}
      title={whatsapp.title}
      description={whatsapp.description}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <ScrollReveal>
          <ul className="space-y-5">
            {whatsapp.points.map((point, index) => {
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
          <WhatsappChatMockup />
        </ScrollReveal>
      </div>
    </Section>
  );
}

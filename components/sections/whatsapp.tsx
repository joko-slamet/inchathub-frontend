import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";
import { WhatsappChatMockup } from "@/components/sections/whatsapp-chat-mockup";

export function Whatsapp({ content }: { content: SiteContent["whatsapp"] }) {
  return (
    <Section
      id="whatsapp"
      eyebrow={content.eyebrow}
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
      description={content.description}
    >
      <div className="mt-14 flex justify-center">
        <ScrollReveal className="w-full max-w-md">
          <WhatsappChatMockup content={content.chatMockup} />
        </ScrollReveal>
      </div>
    </Section>
  );
}

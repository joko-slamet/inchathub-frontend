import Image from "next/image";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

export function Problem({ content }: { content: SiteContent["problem"] }) {
  return (
    <Section
      id="masalah"
      title={
        <>
          {content.titleMain} <span className="text-signal">{content.titleAccent}</span>
        </>
      }
    >
      <div className="mt-4">
        <ScrollReveal delay={0.2}>
          <Image
            src="/images/diagram-white.png"
            alt="Diagram alur channel WhatsApp, Instagram, Facebook, Telegram, Email, Website Chat, Teams, Threads, dan X masuk ke platform ChatHub, lalu terdistribusi ke tim Customer Service, Sales, Marketing, Management, AI Assistant, dan Analytics"
            width={1365}
            height={768}
            className="h-auto w-full rounded-2xl border border-dashed"
          />
        </ScrollReveal>
      </div>
    </Section>
  );
}

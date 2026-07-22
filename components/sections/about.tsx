import { LuGlobe } from "react-icons/lu";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import type { SiteContent } from "@/content/site-content";

export function About({ content }: { content: SiteContent["about"] }) {
  return (
    <section className="bg-paper px-6 py-20 sm:pt-28 md:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <div className="space-y-6">
          {content.paragraphs.map((paragraph, index) => (
            <ScrollReveal key={index} delay={index * 0.05}>
              <p
                className={`leading-relaxed text-ink/75 ${
                  index === 0 ? "text-lg font-medium text-ink sm:text-xl" : "text-base sm:text-lg"
                }`}
              >
                {paragraph}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

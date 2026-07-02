import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Button } from "@/components/ui/button";
import { closingCta } from "@/content/site-content";

export function ClosingCta() {
  return (
    <section id="kontak" className="scroll-mt-20 bg-ink px-6 py-24 text-paper sm:py-28 md:px-10 lg:px-16">
      <ScrollReveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {closingCta.title}
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-paper/70 sm:text-lg">
          {closingCta.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {closingCta.badges.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-paper/20 px-4 py-1.5 font-mono text-xs tracking-wide text-paper/75 uppercase"
            >
              {badge}
            </span>
          ))}
        </div>

        <div className="mt-10">
          <Button href="https://wa.me/6280000000000" variant="primary" size="lg">
            {closingCta.cta}
          </Button>
        </div>
      </ScrollReveal>
    </section>
  );
}

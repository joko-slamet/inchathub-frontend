import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Icon } from "@/components/ui/icon-map";
import { industries } from "@/content/site-content";

export function Industries() {
  return (
    <Section
      id="industri"
      align="center"
      eyebrow={industries.eyebrow}
      title={industries.title}
      description={industries.description}
    >
      <ScrollReveal delay={0.1} className="mt-14">
        <div className="grid grid-cols-1 gap-6 border-y border-line py-8 sm:grid-cols-3">
          {industries.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-display text-3xl font-semibold tracking-tight text-signal sm:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-ink/60">{stat.label}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.15} className="mt-12">
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {industries.list.map((industry) => (
            <div
              key={industry.name}
              className="flex flex-col items-center gap-3 rounded-xl border border-line px-4 py-6 text-center transition-colors hover:border-ink/20"
            >
              <span className="flex size-10 items-center justify-center rounded-lg bg-signal-dim text-signal">
                <Icon name={industry.icon} className="size-5" />
              </span>
              <p className="text-xs font-medium text-ink/75 sm:text-sm">{industry.name}</p>
            </div>
          ))}
        </div>
      </ScrollReveal>

      <ScrollReveal delay={0.2} className="mt-16">
        <p className="text-center font-mono text-xs tracking-widest text-ink/40 uppercase">
          Dipercaya organisasi berikut
        </p>
        {/* TODO: ganti grid placeholder ini dengan logo resmi klien setelah mendapat izin tertulis dari masing-masing instansi/rumah sakit/perusahaan. */}
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 md:grid-cols-8">
          {Array.from({ length: industries.logoPlaceholderCount }).map((_, index) => (
            <div
              key={index}
              className="flex h-16 items-center justify-center rounded-lg border border-dashed border-line bg-ink/[0.02]"
            >
              <span className="font-mono text-[0.6rem] tracking-wider text-ink/30 uppercase">
                Logo Klien
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </Section>
  );
}

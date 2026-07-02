import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Icon } from "@/components/ui/icon-map";
import { Logo } from "@/components/ui/logo";
import { problem, channels } from "@/content/site-content";

export function Problem() {
  return (
    <Section
      id="masalah"
      tone="ink"
      eyebrow={problem.eyebrow}
      title={problem.title}
      description={problem.description}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
        <ScrollReveal delay={0.1}>
          <ul className="space-y-4">
            {problem.painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 border-b border-paper/10 pb-4">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                <span className="text-sm leading-relaxed text-paper/80 sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-6 sm:p-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-paper/40 uppercase">
                  {problem.flowChannelsLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {channels.map((channel) => (
                    <span
                      key={channel.badge}
                      className="flex items-center gap-1.5 rounded-lg border border-paper/15 bg-paper/5 px-2.5 py-1.5"
                    >
                      <Icon name={channel.icon} className="size-3.5 text-paper/70" />
                      <span className="font-mono text-[0.6rem] tracking-wider text-paper/60 uppercase">
                        {channel.badge}
                      </span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-signal/40 bg-signal/10 px-6 py-5">
                  <Logo inverse />
                  <span className="font-mono text-[0.6rem] tracking-widest text-paper/50 uppercase">
                    {problem.flowHubLabel}
                  </span>
                </div>
              </div>

              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-paper/40 uppercase md:text-right">
                  {problem.flowTeamsLabel}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {problem.teams.map((team) => (
                    <div
                      key={team.name}
                      className="flex items-center gap-2.5 rounded-lg border border-paper/15 bg-paper/5 px-3 py-2 md:justify-end md:flex-row-reverse"
                    >
                      <Icon name={team.icon} className="size-4 text-paper/70" />
                      <span className="text-sm text-paper/80">{team.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

import {
  MessageCircle,
  Camera,
  MessageSquare,
  Send,
  Mail,
  Globe,
  Video,
  AtSign,
  Hash,
  TrendingUp,
  BarChart3,
  Building2,
  Bot,
  Gauge,
  type LucideIcon,
} from "lucide-react";
import { Section } from "@/components/ui/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { Logo } from "@/components/ui/logo";
import type { Channel, SiteContent } from "@/content/site-content";

// Keyed by Channel.badge — keep in sync with content/site-content.ts `channels`.
const channelIcons: Record<string, LucideIcon> = {
  WA: MessageCircle,
  IG: Camera,
  FB: MessageSquare,
  TG: Send,
  MAIL: Mail,
  WEB: Globe,
  TEAMS: Video,
  TH: AtSign,
  X: Hash,
};

// Positional match with problem.teams in content/site-content.ts — keep order in sync.
const teamIcons: LucideIcon[] = [MessageCircle, TrendingUp, BarChart3, Building2, Bot, Gauge];

export function Problem({
  content,
  channels,
}: {
  content: SiteContent["problem"];
  channels: Channel[];
}) {
  return (
    <Section
      id="masalah"
      eyebrow={content.eyebrow}
      title={content.title}
      description={content.description}
    >
      <div className="mt-14 grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-16">
        <ScrollReveal delay={0.1}>
          <ul className="space-y-4">
            {content.painPoints.map((point) => (
              <li key={point} className="flex items-start gap-3 border-b border-line pb-4">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-signal" />
                <span className="text-sm leading-relaxed text-ink/75 sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="rounded-2xl border border-line bg-ink/[0.02] p-6 sm:p-8">
            <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[1fr_auto_1fr]">
              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-ink/40 uppercase">
                  {content.flowChannelsLabel}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {channels.map((channel) => {
                    const ChannelIcon = channelIcons[channel.badge] ?? MessageCircle;
                    return (
                      <span
                        key={channel.badge}
                        className="flex items-center gap-1.5 rounded-lg border border-line bg-paper px-2.5 py-1.5"
                      >
                        <ChannelIcon className="size-3.5 text-ink/60" strokeWidth={1.75} />
                        <span className="font-mono text-[0.6rem] tracking-wider text-ink/50 uppercase">
                          {channel.badge}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="flex justify-center">
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-signal/40 bg-signal/10 px-6 py-5">
                  <Logo className="h-6 w-auto" />
                  <span className="font-mono text-[0.6rem] tracking-widest text-ink/50 uppercase">
                    {content.flowHubLabel}
                  </span>
                </div>
              </div>

              <div>
                <p className="font-mono text-[0.65rem] tracking-widest text-ink/40 uppercase md:text-right">
                  {content.flowTeamsLabel}
                </p>
                <div className="mt-3 flex flex-col gap-2">
                  {content.teams.map((team, index) => {
                    const TeamIcon = teamIcons[index];
                    return (
                      <div
                        key={team.name}
                        className="flex items-center gap-2.5 rounded-lg border border-line bg-paper px-3 py-2 md:justify-end md:flex-row-reverse"
                      >
                        <TeamIcon className="size-4 text-ink/60" strokeWidth={1.75} />
                        <span className="text-sm text-ink/75">{team.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <div className="flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2">
                <MessageCircle className="size-3.5 text-signal" strokeWidth={1.75} />
                <span className="text-sm font-medium text-ink/75">{content.flowTagline}</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </Section>
  );
}

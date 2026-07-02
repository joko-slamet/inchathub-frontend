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
  type LucideIcon,
} from "lucide-react";
import type { Channel } from "@/content/site-content";

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

export function ChannelBadge({
  channel,
  size = "md",
}: {
  channel: Channel;
  size?: "sm" | "md";
}) {
  const ChannelIcon = channelIcons[channel.badge] ?? MessageCircle;

  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex items-center justify-center rounded-lg border border-line bg-paper text-ink/70 ${
          size === "sm" ? "size-7" : "size-9"
        }`}
      >
        <ChannelIcon className={size === "sm" ? "size-3.5" : "size-4"} strokeWidth={1.75} />
      </span>
      <span className="font-mono text-[0.65rem] tracking-wider text-ink/50 uppercase">
        {channel.badge}
      </span>
    </div>
  );
}

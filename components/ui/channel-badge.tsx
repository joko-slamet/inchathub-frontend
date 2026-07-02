import type { Channel } from "@/content/site-content";
import { Icon } from "@/components/ui/icon-map";

export function ChannelBadge({
  channel,
  size = "md",
}: {
  channel: Channel;
  size?: "sm" | "md";
}) {
  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex items-center justify-center rounded-lg border border-line bg-paper text-ink/70 ${
          size === "sm" ? "size-7" : "size-9"
        }`}
      >
        <Icon name={channel.icon} className={size === "sm" ? "size-3.5" : "size-4"} />
      </span>
      <span className="font-mono text-[0.65rem] tracking-wider text-ink/50 uppercase">
        {channel.badge}
      </span>
    </div>
  );
}

import { SiWhatsapp, SiInstagram, SiFacebook, SiTelegram, SiThreads, SiX } from "react-icons/si";
import { LuMail, LuGlobe, LuVideo } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { Channel } from "@/content/site-content";

// Keyed by Channel.badge — keep in sync with content/site-content.ts `channels`.
// Real brand colors for actual social/chat platforms; generic channels (Email,
// Web Chat, Teams — no authentic brand glyph available) stay neutral.
const channelIcons: Record<string, { Icon: IconType; color?: string }> = {
  WA: { Icon: SiWhatsapp, color: "#25D366" },
  IG: { Icon: SiInstagram, color: "#E4405F" },
  FB: { Icon: SiFacebook, color: "#1877F2" },
  TG: { Icon: SiTelegram, color: "#26A5E4" },
  MAIL: { Icon: LuMail },
  WEB: { Icon: LuGlobe },
  TEAMS: { Icon: LuVideo },
  TH: { Icon: SiThreads, color: "#000000" },
  X: { Icon: SiX, color: "#000000" },
};

export function ChannelBadge({
  channel,
  size = "md",
}: {
  channel: Channel;
  size?: "sm" | "md";
}) {
  const { Icon, color } = channelIcons[channel.badge] ?? { Icon: LuGlobe };

  return (
    <div className="flex items-center gap-2">
      <span
        className={`flex items-center justify-center rounded-full border border-line bg-paper text-ink/70 transition-transform duration-200 hover:-translate-y-0.5 hover:rotate-6 ${
          size === "sm" ? "size-7" : "size-9"
        }`}
      >
        <Icon className={size === "sm" ? "size-3.5" : "size-4"} style={color ? { color } : undefined} />
      </span>
      <span className="text-[0.7rem] font-semibold tracking-wide text-slate uppercase">
        {channel.badge}
      </span>
    </div>
  );
}

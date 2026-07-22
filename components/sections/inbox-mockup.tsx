"use client";

import { useState } from "react";
import { SiWhatsapp, SiInstagram, SiTelegram } from "react-icons/si";
import { LuMail, LuGlobe, LuMessageCircle } from "react-icons/lu";
import type { IconType } from "react-icons";
import type { SiteContent } from "@/content/site-content";

// Keyed by the `channel` badge used in omnichannel.inboxMockup.conversations.
const channelIcons: Record<string, { Icon: IconType; color?: string }> = {
  WA: { Icon: SiWhatsapp, color: "#25D366" },
  IG: { Icon: SiInstagram, color: "#E4405F" },
  MAIL: { Icon: LuMail },
  WEB: { Icon: LuGlobe },
  TG: { Icon: SiTelegram, color: "#26A5E4" },
};

export function InboxMockup({ content }: { content: SiteContent["omnichannel"]["inboxMockup"] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { conversations } = content;

  return (
    <div className="overflow-hidden rounded-[1.75rem] border-2 border-line bg-paper shadow-[0_24px_64px_-32px_rgba(26,22,24,0.3)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="text-sm font-semibold text-ink">{content.headerTitle}</span>
        <span className="text-[0.7rem] font-semibold text-ink/40 uppercase">
          {conversations.filter((c) => c.unread).length} {content.unreadSuffix}
        </span>
      </div>
      <ul className="divide-y divide-line">
        {conversations.map((conversation, index) => {
          const { Icon, color } = channelIcons[conversation.channel] ?? { Icon: LuMessageCircle };
          const active = index === activeIndex;
          return (
            <li key={conversation.name}>
              <button
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`flex w-full items-start gap-3 px-5 py-3.5 text-left transition-colors ${
                  active ? "bg-signal-dim" : "hover:bg-ink/[0.03]"
                }`}
              >
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-slate-dim text-ink/60">
                  <Icon className="size-4" style={color ? { color } : undefined} />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <p
                      className={`truncate text-sm ${
                        conversation.unread ? "font-semibold text-ink" : "font-medium text-ink/70"
                      }`}
                    >
                      {conversation.name}
                    </p>
                    <span className="shrink-0 text-[0.7rem] font-medium text-ink/40">
                      {conversation.time}
                    </span>
                  </div>
                  <p
                    className={`mt-0.5 truncate text-xs ${
                      conversation.unread ? "text-ink/70" : "text-ink/45"
                    }`}
                  >
                    {conversation.preview}
                  </p>
                </div>
                {conversation.unread && (
                  <span className="mt-1.5 size-2 shrink-0 rounded-full bg-signal" />
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

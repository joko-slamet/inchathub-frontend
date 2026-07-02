"use client";

import { useState } from "react";
import { MessageCircle, Camera, Mail, Globe, Send, type LucideIcon } from "lucide-react";
import type { SiteContent } from "@/content/site-content";

// Keyed by the `channel` badge used in omnichannel.inboxMockup.conversations.
const channelIcons: Record<string, LucideIcon> = {
  WA: MessageCircle,
  IG: Camera,
  MAIL: Mail,
  WEB: Globe,
  TG: Send,
};

export function InboxMockup({ content }: { content: SiteContent["omnichannel"]["inboxMockup"] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { conversations } = content;

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_64px_-32px_rgba(20,16,15,0.3)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="text-sm font-semibold text-ink">{content.headerTitle}</span>
        <span className="font-mono text-[0.65rem] text-ink/40 uppercase">
          {conversations.filter((c) => c.unread).length} {content.unreadSuffix}
        </span>
      </div>
      <ul className="divide-y divide-line">
        {conversations.map((conversation, index) => {
          const ChannelIcon = channelIcons[conversation.channel] ?? MessageCircle;
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
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-ink/5 text-ink/60">
                  <ChannelIcon className="size-4" strokeWidth={1.75} />
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
                    <span className="shrink-0 font-mono text-[0.65rem] text-ink/40">
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

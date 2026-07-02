"use client";

import { useState } from "react";
import { channels } from "@/content/site-content";
import { Icon } from "@/components/ui/icon-map";
import type { omnichannel } from "@/content/site-content";

type Conversation = (typeof omnichannel)["inboxMockup"]["conversations"][number];

function findChannel(badge: string) {
  return channels.find((c) => c.badge === badge) ?? channels[0];
}

export function InboxMockup({ conversations }: { conversations: Conversation[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_64px_-32px_rgba(20,16,15,0.3)]">
      <div className="flex items-center justify-between border-b border-line px-5 py-3.5">
        <span className="text-sm font-semibold text-ink">Unified Inbox</span>
        <span className="font-mono text-[0.65rem] text-ink/40 uppercase">
          {conversations.filter((c) => c.unread).length} belum dibaca
        </span>
      </div>
      <ul className="divide-y divide-line">
        {conversations.map((conversation, index) => {
          const channel = findChannel(conversation.channel);
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
                  <Icon name={channel.icon} className="size-4" />
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

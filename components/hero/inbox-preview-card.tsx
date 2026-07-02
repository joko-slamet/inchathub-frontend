"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Camera,
  Mail,
  type LucideIcon,
} from "lucide-react";
import type { SiteContent } from "@/content/site-content";

// Keyed by the `channel` badge used in hero.inboxCard.messages.
const channelIcons: Record<string, LucideIcon> = {
  WA: MessageCircle,
  IG: Camera,
  MAIL: Mail,
};

export function InboxPreviewCard({ content }: { content: SiteContent["hero"]["inboxCard"] }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full max-w-sm rounded-2xl border border-line bg-paper shadow-[0_20px_60px_-24px_rgba(20,16,15,0.35)]"
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-4">
        <div>
          <p className="text-sm font-semibold text-ink">{content.title}</p>
          <p className="mt-0.5 font-mono text-[0.7rem] text-ink/50">
            {content.subtitle}
          </p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-ok/10 px-2.5 py-1 font-mono text-[0.65rem] text-ok">
          <span className="size-1.5 rounded-full bg-ok" />
          {content.onlineLabel}
        </span>
      </div>

      <ul className="divide-y divide-line">
        {content.messages.map((message, index) => {
          const ChannelIcon = channelIcons[message.channel] ?? MessageCircle;
          return (
            <motion.li
              key={message.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.15 }}
              className="flex items-start gap-3 px-5 py-3.5"
            >
              <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-signal-dim text-signal">
                <ChannelIcon className="size-4" strokeWidth={1.75} />
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate text-sm font-medium text-ink">{message.name}</p>
                  <span className="shrink-0 font-mono text-[0.65rem] text-ink/40">
                    {message.time}
                  </span>
                </div>
                <p className="mt-0.5 truncate text-xs text-ink/55">{message.preview}</p>
              </div>
              {message.unread && (
                <span className="mt-1.5 size-2 shrink-0 rounded-full bg-signal" />
              )}
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
}

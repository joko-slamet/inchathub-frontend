import { LuCheckCheck, LuChevronRight } from "react-icons/lu";
import type { SiteContent } from "@/content/site-content";

export function WhatsappChatMockup({ content }: { content: SiteContent["whatsapp"]["chatMockup"] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_64px_-32px_rgba(20,16,15,0.3)]">
      <div className="flex items-center gap-3 bg-ink px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-paper/10 font-display text-sm font-semibold text-paper">
          {content.contactName.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-paper">{content.contactName}</p>
          <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-paper/50">
            <span className="size-1.5 rounded-full bg-ok" />
            {content.statusLabel}
          </span>
        </div>
      </div>

      <div className="space-y-3 bg-[repeating-linear-gradient(135deg,var(--color-line)_0px,var(--color-line)_1px,transparent_1px,transparent_18px)] bg-ink/[0.015] px-5 py-6">
        {content.messages.map((message, index) => (
          <div
            key={index}
            className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm shadow-sm ${
              message.from === "business"
                ? "ml-auto rounded-tr-sm bg-signal text-white"
                : "rounded-tl-sm bg-paper text-ink/80"
            }`}
          >
            <p>{message.text}</p>
            <div
              className={`mt-1 flex items-center justify-end gap-1 font-mono text-[0.6rem] ${
                message.from === "business" ? "text-white/70" : "text-ink/40"
              }`}
            >
              {message.time}
              {message.from === "business" && (
                <LuCheckCheck className="size-3.5" />
              )}
            </div>
          </div>
        ))}

        <div className="space-y-1.5">
          {content.quickReplies.map((reply) => (
            <div
              key={reply}
              className="flex max-w-[80%] items-center justify-between gap-3 rounded-lg border border-line bg-paper px-3.5 py-2 text-sm text-ink/75 shadow-sm"
            >
              {reply}
              <LuChevronRight className="size-3.5 shrink-0 text-ink/35" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

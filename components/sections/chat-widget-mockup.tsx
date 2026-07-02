import { LuBot, LuSend, LuChevronRight } from "react-icons/lu";
import type { SiteContent } from "@/content/site-content";

export function ChatWidgetMockup({ content }: { content: SiteContent["aiCrm"]["chatWidget"] }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_64px_-32px_rgba(20,16,15,0.3)]">
      <div className="flex items-center gap-3 bg-ink px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-signal text-white">
          <LuBot className="size-4" />
        </span>
        <div>
          <p className="text-sm font-semibold text-paper">{content.botName}</p>
          <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-paper/50">
            <span className="size-1.5 rounded-full bg-ok" />
            {content.statusLabel}
          </span>
        </div>
      </div>

      <div className="space-y-3 px-5 py-5">
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-ink/5 px-3.5 py-2.5 text-sm text-ink/80">
          {content.botGreeting}
        </div>
        <div className="ml-auto max-w-[85%] rounded-2xl rounded-tr-sm bg-signal px-3.5 py-2.5 text-sm text-white">
          {content.userMessage}
        </div>
        <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-ink/5 px-3.5 py-2.5 text-sm text-ink/80">
          {content.botReply}
        </div>

        <div className="space-y-1.5 pt-1">
          {content.quickReplies.map((reply) => (
            <div
              key={reply}
              className="flex items-center justify-between rounded-lg border border-line px-3.5 py-2 text-sm text-ink/75"
            >
              {reply}
              <LuChevronRight className="size-3.5 text-ink/35" />
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-line px-5 py-3.5">
        <div className="flex-1 rounded-full border border-line px-3.5 py-2 text-xs text-ink/35">
          {content.inputPlaceholder}
        </div>
        <span className="flex size-8 items-center justify-center rounded-full bg-ink/10 text-ink/50">
          <LuSend className="size-3.5" />
        </span>
      </div>
    </div>
  );
}

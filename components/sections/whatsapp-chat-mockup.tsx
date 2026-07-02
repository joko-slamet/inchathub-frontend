import { CheckCheck } from "lucide-react";
import { whatsapp } from "@/content/site-content";

export function WhatsappChatMockup() {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_64px_-32px_rgba(20,16,15,0.3)]">
      <div className="flex items-center gap-3 bg-ink px-5 py-4">
        <span className="flex size-9 items-center justify-center rounded-full bg-paper/10 font-display text-sm font-semibold text-paper">
          {whatsapp.chatMockup.contactName.charAt(0)}
        </span>
        <div>
          <p className="text-sm font-semibold text-paper">{whatsapp.chatMockup.contactName}</p>
          <span className="flex items-center gap-1.5 font-mono text-[0.65rem] text-paper/50">
            <span className="size-1.5 rounded-full bg-ok" />
            WhatsApp Business
          </span>
        </div>
      </div>

      <div className="space-y-3 bg-[repeating-linear-gradient(135deg,var(--color-line)_0px,var(--color-line)_1px,transparent_1px,transparent_18px)] bg-ink/[0.015] px-5 py-6">
        {whatsapp.chatMockup.messages.map((message, index) => (
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
                <CheckCheck className="size-3.5" strokeWidth={2} />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

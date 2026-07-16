"use client";

import { usePathname } from "next/navigation";
import { FaWhatsapp } from "react-icons/fa";
import { useWhatsAppContact } from "@/hooks/use-whatsapp-contact";

export function WhatsAppFloatButton() {
  const pathname = usePathname();
  const { href } = useWhatsAppContact();

  // Not on the admin panel — this is a customer-facing contact widget, not
  // something the admin needs floating over their own dashboard.
  if (pathname?.startsWith("/panel")) return null;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      data-gtm-id="cta_whatsapp_float"
      className="fixed right-8 bottom-8 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-8px_rgba(37,211,102,0.6)] transition-transform duration-200 hover:scale-110 active:scale-95"
    >
      <span
        aria-hidden="true"
        className="animate-pulse-glow pointer-events-none absolute inset-0 rounded-full bg-[#25D366]"
      />
      <FaWhatsapp className="relative size-7" />
    </a>
  );
}

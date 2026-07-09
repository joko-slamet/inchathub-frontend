"use client";

import { useLocale } from "@/components/locale-provider";
import { useSiteSettings } from "@/hooks/use-site-settings";
import { getSiteContent } from "@/content/site-content";

// Same reasoning as use-trial-url.ts: several public pages render static
// locale content only, not the live CMS-merged content, so this resolves
// the admin-editable WhatsApp number/message directly rather than relying
// on a prop passed down from whatever page is currently rendering.
export function useWhatsAppContact(): { phone: string; message: string; href: string } {
  const { locale } = useLocale();
  const { settings } = useSiteSettings();
  const row = settings?.find((s) => s.locale === locale);
  const closingCta = row?.closingCta ?? getSiteContent(locale).closingCta;

  const phone = closingCta.whatsappPhone;
  const message = closingCta.whatsappMessage;
  return { phone, message, href: `https://wa.me/${phone}?text=${encodeURIComponent(message)}` };
}

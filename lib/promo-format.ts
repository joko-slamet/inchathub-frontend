import type { Locale } from "@/content/site-content";
import type { PromoDTO } from "./promo-types";
import { toPromoImageUrl } from "./promo-image";

export function formatDiscountLabel(promo: Pick<PromoDTO, "discountType" | "discountValue">): string {
  if (promo.discountType === "PERCENTAGE") return `-${promo.discountValue}%`;
  return `-${promo.discountValue.toLocaleString("id-ID")}`;
}

export type PublicPromoCard = {
  slug: string;
  code: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  discountLabel: string;
};

export function toPublicPromoCards(promos: PromoDTO[], locale: Locale): PublicPromoCard[] {
  return promos.map((promo) => {
    const translation = promo.translations.find((t) => t.locale === locale) ?? promo.translations[0];
    return {
      slug: promo.slug,
      code: promo.code,
      title: translation?.title ?? promo.code,
      excerpt: translation?.excerpt ?? "",
      imageUrl: toPromoImageUrl(promo.imageUrl),
      discountLabel: formatDiscountLabel(promo),
    };
  });
}

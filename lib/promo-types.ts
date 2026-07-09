export type PromoDiscountType = "FIXED" | "PERCENTAGE";

export type PromoTranslationDTO = {
  id: string;
  promoId: string;
  locale: string;
  title: string;
  excerpt: string;
  description: string;
};

export type PromoDTO = {
  id: string;
  slug: string;
  code: string;
  imageUrl: string;
  discountType: PromoDiscountType;
  discountValue: number;
  isActive: boolean;
  startsAt: string | null;
  endsAt: string | null;
  sortOrder: number;
  translations: PromoTranslationDTO[];
  createdAt: string;
  updatedAt: string;
};

export type PromoTranslationInput = {
  locale: string;
  title: string;
  excerpt: string;
  description: string;
};

export type PromoInput = {
  code: string;
  discountType: PromoDiscountType;
  discountValue: number;
  isActive: boolean;
  startsAt: string | null;
  endsAt: string | null;
  sortOrder: number;
  translations: PromoTranslationInput[];
};

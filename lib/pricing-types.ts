export type PricingFeature = { label: string; value?: string; included: boolean };

export type PricingTranslation = {
  id: string;
  planId: string;
  locale: string;
  name: string;
  tagline: string;
  features: PricingFeature[];
};

export type PricingPlanDTO = {
  id: string;
  key: string;
  sortOrder: number;
  popular: boolean;
  originalPrice: number;
  price: number;
  translations: PricingTranslation[];
  createdAt: string;
  updatedAt: string;
};

export type PricingPlanInput = {
  key: string;
  sortOrder: number;
  popular: boolean;
  originalPrice: number;
  price: number;
  translations: { locale: string; name: string; tagline: string; features: PricingFeature[] }[];
};

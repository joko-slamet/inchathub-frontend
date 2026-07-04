export type MissionItemDTO = { textMain: string; textAccent: string };
export type ContactInfoCardDTO = { label: string; value: string; href: string };

export type CompanyProfileTranslationDTO = {
  id: string;
  companyProfileId: string;
  locale: string;
  paragraphs: string[];
  visionEyebrow: string;
  missionEyebrow: string;
  visionMain: string;
  visionAccent: string;
  missionItems: MissionItemDTO[];
  contactInfoCards: ContactInfoCardDTO[];
};

export type CompanyProfileDTO = {
  id: string;
  mapSrc: string;
  translations: CompanyProfileTranslationDTO[];
  createdAt: string;
  updatedAt: string;
};

export type CompanyProfileTranslationInput = {
  locale: string;
  paragraphs: string[];
  visionEyebrow: string;
  missionEyebrow: string;
  visionMain: string;
  visionAccent: string;
  missionItems: MissionItemDTO[];
  contactInfoCards: ContactInfoCardDTO[];
};

export type CompanyProfileInput = {
  mapSrc: string;
  translations: CompanyProfileTranslationInput[];
};

export type AiArticleConfigDTO = {
  id: string;
  enabled: boolean;
  generateTimes: string[];
  weekdayTopics: string[];
  weekendTopics: string[];
  prompt: string;
  createdAt: string;
  updatedAt: string;
};

export type AiArticleConfigInput = {
  enabled?: boolean;
  generateTimes?: string[];
  weekdayTopics?: string[];
  weekendTopics?: string[];
  prompt?: string;
};

export type ArticleDayType = "WEEKDAY" | "WEEKEND";

export type ArticleTranslationDTO = {
  id: string;
  articleId: string;
  locale: string;
  title: string;
  excerpt: string;
  content: string[];
};

export type ArticleDTO = {
  id: string;
  slug: string;
  topic: string;
  dayType: ArticleDayType;
  imageUrl: string;
  seoScore: number | null;
  seoFeedback: string | null;
  translations: ArticleTranslationDTO[];
  generatedAt: string;
  createdAt: string;
  updatedAt: string;
};

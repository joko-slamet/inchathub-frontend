import type { Locale, SiteContent } from "@/content/site-content";
import type { ArticleDTO } from "./ai-article-types";
import { toArticleImageUrl } from "./article-image";

function estimateReadTime(content: string[], locale: Locale): string {
  const wordCount = content.join(" ").split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / 200));
  return locale === "id" ? `${minutes} min baca` : `${minutes} min read`;
}

function formatArticleDate(iso: string, locale: Locale): string {
  return new Date(iso).toLocaleDateString(locale === "id" ? "id-ID" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Shapes AI-generated articles into the format the public blog components
// (components/sections/blog-grid.tsx, app/blog/*) already expect, so
// swapping the data source doesn't require touching their rendering logic.
export function toPublicBlogPosts(articles: ArticleDTO[], locale: Locale): SiteContent["blog"]["posts"] {
  return articles.map((article) => {
    const translation =
      article.translations.find((t) => t.locale === locale) ?? article.translations[0];

    return {
      slug: article.slug,
      category: article.topic,
      title: translation?.title ?? article.slug,
      excerpt: translation?.excerpt ?? "",
      content: translation?.content ?? [],
      imageUrl: toArticleImageUrl(article.imageUrl),
      author: locale === "id" ? "Tim ChatHub" : "ChatHub Team",
      date: formatArticleDate(article.generatedAt, locale),
      readTime: estimateReadTime(translation?.content ?? [], locale),
    };
  });
}

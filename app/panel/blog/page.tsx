import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/session";
import { BlogAiEditor } from "@/components/panel/blog-ai-editor";
import type { AiArticleConfigDTO, ArticleDTO } from "@/lib/ai-article-types";

async function getAiArticleConfig(token: string): Promise<AiArticleConfigDTO> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/ai-article-config`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load AI article config");
  return res.json();
}

async function getArticles(token: string): Promise<ArticleDTO[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/articles`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load articles");
  return res.json();
}

export default async function AdminBlogPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const [config, articles] = await Promise.all([getAiArticleConfig(token), getArticles(token)]);

  return <BlogAiEditor initialConfig={config} initialArticles={articles} />;
}

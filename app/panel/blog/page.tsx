import { cookies } from "next/headers";
import { SESSION_COOKIE } from "@/lib/session";
import { BlogAiEditor } from "@/components/panel/blog-ai-editor";
import type { AiArticleConfigDTO, ArticlePage } from "@/lib/ai-article-types";

const PAGE_SIZE = 10;

async function getAiArticleConfig(token: string): Promise<AiArticleConfigDTO> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/ai-article-config`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load AI article config");
  return res.json();
}

async function getArticles(token: string, page: number): Promise<ArticlePage> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/articles?page=${page}&limit=${PAGE_SIZE}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load articles");
  return res.json();
}

export default async function AdminBlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const page = Math.max(1, Number((await searchParams).page) || 1);
  const [config, articlePage] = await Promise.all([getAiArticleConfig(token), getArticles(token, page)]);

  return (
    <BlogAiEditor
      initialConfig={config}
      initialArticles={articlePage.data}
      page={articlePage.page}
      totalPages={articlePage.totalPages}
      total={articlePage.total}
    />
  );
}

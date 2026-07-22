import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { SESSION_COOKIE } from "@/lib/session";
import { ArticleEditForm } from "@/components/panel/article-edit-form";
import type { ArticleDTO } from "@/lib/ai-article-types";

async function getArticle(token: string, id: string): Promise<ArticleDTO | null> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/articles/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load article");
  return res.json();
}

export default async function EditArticlePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const article = await getArticle(token, id);
  if (!article) notFound();

  return <ArticleEditForm article={article} />;
}

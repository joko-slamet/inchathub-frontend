"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, SESSION_COOKIE } from "@/lib/session";
import type { ArticleDTO, ArticleTranslationInput } from "@/lib/ai-article-types";

type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

async function requireAdminToken(): Promise<string> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const session = await decrypt(token);
  if (!session || session.role !== "ADMIN" || !token) {
    throw new Error("Unauthorized");
  }
  return token;
}

async function parseErrorBody(res: Response): Promise<string> {
  const body = await res.json().catch(() => null);
  return body?.error ?? `Request failed with status ${res.status}`;
}

export async function deleteArticle(id: string): Promise<ActionResult<true>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/articles/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/blog");
  return { ok: true, data: true };
}

// Saving triggers an OpenRouter call on the backend to re-score SEO against
// the revised text, so this can take a few seconds — the caller should show
// a pending state rather than assume this resolves instantly.
export async function updateArticle(
  id: string,
  translations: ArticleTranslationInput[],
): Promise<ActionResult<ArticleDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/articles/${id}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
    body: JSON.stringify({ translations }),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/blog");
  return { ok: true, data: await res.json() };
}

// Can take a while (two OpenRouter calls: text + image), so the caller
// should show a pending state rather than assume this resolves quickly.
export async function generateArticleNow(): Promise<ActionResult<ArticleDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/articles/generate-now`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/blog");
  return { ok: true, data: await res.json() };
}

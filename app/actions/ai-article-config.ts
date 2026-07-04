"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, SESSION_COOKIE } from "@/lib/session";
import type { AiArticleConfigDTO, AiArticleConfigInput } from "@/lib/ai-article-types";

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

export async function updateAiArticleConfig(
  input: AiArticleConfigInput,
): Promise<ActionResult<AiArticleConfigDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/ai-article-config`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/blog");
  return { ok: true, data: await res.json() };
}

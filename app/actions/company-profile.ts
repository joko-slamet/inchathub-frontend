"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, SESSION_COOKIE } from "@/lib/session";
import type { CompanyProfileDTO, CompanyProfileInput } from "@/lib/company-profile-types";

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

export async function updateCompanyProfile(
  input: CompanyProfileInput,
): Promise<ActionResult<CompanyProfileDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/company-profile`, {
    method: "PUT",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/about");
  return { ok: true, data: await res.json() };
}

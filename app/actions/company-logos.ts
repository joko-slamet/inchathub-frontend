"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, SESSION_COOKIE } from "@/lib/session";
import type { CompanyLogoDTO } from "@/lib/company-logo-types";

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

export async function uploadCompanyLogo(formData: FormData): Promise<ActionResult<CompanyLogoDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const name = formData.get("name");
  const logo = formData.get("logo");

  if (typeof name !== "string" || !name.trim()) {
    return { ok: false, error: "Nama perusahaan wajib diisi." };
  }
  if (!(logo instanceof File) || logo.size === 0) {
    return { ok: false, error: "File logo wajib diunggah." };
  }

  const backendForm = new FormData();
  backendForm.set("name", name);
  backendForm.set("logo", logo);

  const res = await fetch(`${process.env.BACKEND_URL}/api/company-logos`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: backendForm,
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/our-client");
  return { ok: true, data: await res.json() };
}

export async function deleteCompanyLogo(id: string): Promise<ActionResult<true>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/company-logos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/our-client");
  return { ok: true, data: true };
}

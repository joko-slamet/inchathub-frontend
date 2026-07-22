"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
import { decrypt, SESSION_COOKIE } from "@/lib/session";
import type { PromoDTO } from "@/lib/promo-types";

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

// Never trust the client's FormData blindly — pull out only the fields the
// backend expects before forwarding.
function buildPromoFormData(formData: FormData): FormData {
  const backendForm = new FormData();
  const textFields = [
    "code",
    "discountType",
    "discountValue",
    "isActive",
    "startsAt",
    "endsAt",
    "sortOrder",
    "translations",
  ];
  for (const key of textFields) {
    const value = formData.get(key);
    if (typeof value === "string") backendForm.set(key, value);
  }
  const image = formData.get("image");
  if (image instanceof File && image.size > 0) backendForm.set("image", image);
  return backendForm;
}

export async function createPromo(formData: FormData): Promise<ActionResult<PromoDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/promos`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
    body: buildPromoFormData(formData),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/promo");
  return { ok: true, data: await res.json() };
}

export async function updatePromo(id: string, formData: FormData): Promise<ActionResult<PromoDTO>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/promos/${id}`, {
    method: "PATCH",
    headers: { Authorization: `Bearer ${token}` },
    body: buildPromoFormData(formData),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/promo");
  return { ok: true, data: await res.json() };
}

export async function deletePromo(id: string): Promise<ActionResult<true>> {
  let token: string;
  try {
    token = await requireAdminToken();
  } catch {
    return { ok: false, error: "Anda harus login sebagai admin." };
  }

  const res = await fetch(`${process.env.BACKEND_URL}/api/promos/${id}`, {
    method: "DELETE",
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };

  revalidatePath("/panel/promo");
  return { ok: true, data: true };
}

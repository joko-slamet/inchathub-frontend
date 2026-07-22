"use server";

import type { ContactSubmissionDTO, ContactSubmissionInput } from "@/lib/contact-submission-types";

type ActionResult<T> = { ok: true; data: T } | { ok: false; error: string };

async function parseErrorBody(res: Response): Promise<string> {
  const body = await res.json().catch(() => null);
  return body?.error ?? `Request failed with status ${res.status}`;
}

export async function submitContactForm(
  input: ContactSubmissionInput,
): Promise<ActionResult<ContactSubmissionDTO>> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/contact-submissions`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
    cache: "no-store",
  });

  if (!res.ok) return { ok: false, error: await parseErrorBody(res) };
  return { ok: true, data: await res.json() };
}

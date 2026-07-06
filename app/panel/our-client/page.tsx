import { cookies } from "next/headers";
import { CompanyLogoEditor } from "@/components/panel/company-logo-editor";
import { SESSION_COOKIE } from "@/lib/session";
import type { CompanyLogoDTO } from "@/lib/company-logo-types";

async function getCompanyLogos(token: string): Promise<CompanyLogoDTO[]> {
  const res = await fetch(`${process.env.BACKEND_URL}/api/company-logos`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to load company logos");
  return res.json();
}

export default async function OurClientPage() {
  const token = (await cookies()).get(SESSION_COOKIE)?.value ?? "";
  const logos = await getCompanyLogos(token);

  return <CompanyLogoEditor initialLogos={logos} />;
}

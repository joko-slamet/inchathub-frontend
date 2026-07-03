import type { Metadata } from "next";
import { AdminShell } from "@/components/admin/admin-shell";
import { requireUser } from "@/lib/dal";

export const metadata: Metadata = {
  title: "Admin — ChatHub",
  description: "Panel admin untuk mengelola konten situs ChatHub.",
  robots: { index: false, follow: false },
};

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const user = await requireUser("ADMIN");
  return <AdminShell user={{ name: user.name }}>{children}</AdminShell>;
}

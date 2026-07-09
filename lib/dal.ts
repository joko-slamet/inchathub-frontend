import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getSession, SESSION_COOKIE, type Role } from "./session";

export type CurrentUser = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  role: Role;
  createdAt: string;
  updatedAt: string;
};

// Secure check: verifies the session signature and confirms the account
// still exists by asking the backend. Use this before rendering data that
// depends on the authenticated user, not just for optimistic UI branching.
export const getCurrentUser = cache(async (): Promise<CurrentUser | null> => {
  const session = await getSession();
  if (!session) return null;

  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  const res = await fetch(`${process.env.BACKEND_URL}/api/auth/me`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: "no-store",
  });

  if (!res.ok) return null;
  return res.json();
});

export async function requireUser(role?: Role): Promise<CurrentUser> {
  const user = await getCurrentUser();
  if (!user || (role && user.role !== role)) {
    redirect("/login");
  }
  return user;
}

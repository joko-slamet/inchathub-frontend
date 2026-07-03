"use client";

import { createContext, useContext, type ReactNode } from "react";
import type { Role } from "@/lib/session";

export type AuthUser = { role: Role } | null;

const AuthContext = createContext<AuthUser>(null);

export function AuthProvider({
  children,
  user,
}: {
  children: ReactNode;
  // Resolved server-side in app/layout.tsx so the first paint already
  // reflects the visitor's session — see components/locale-provider.tsx
  // for the same pattern applied to locale.
  user: AuthUser;
}) {
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}

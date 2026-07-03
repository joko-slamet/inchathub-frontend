import "server-only";
import { cache } from "react";
import { cookies } from "next/headers";
import { jwtVerify } from "jose";

export const SESSION_COOKIE = "session";

export type Role = "USER" | "ADMIN";

export type SessionPayload = {
  sub: string;
  role: Role;
};

const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET);

export async function decrypt(token: string | undefined): Promise<SessionPayload | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, encodedSecret, { algorithms: ["HS256"] });
    if (typeof payload.sub !== "string" || typeof payload.role !== "string") return null;
    return { sub: payload.sub, role: payload.role as Role };
  } catch {
    return null;
  }
}

// Optimistic session read: verifies the JWT signature but does not hit the
// database. Safe to call often (e.g. in layouts) since it's cheap and cached
// per request. Do not use this alone to gate access to sensitive data.
export const getSession = cache(async (): Promise<SessionPayload | null> => {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  return decrypt(token);
});

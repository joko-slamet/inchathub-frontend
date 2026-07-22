import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const PROTECTED_PREFIX = "/panel";
const LOGIN_PATH = "/login";

const encodedSecret = new TextEncoder().encode(process.env.JWT_SECRET);

async function hasValidSession(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get("session")?.value;
  if (!token) return false;
  try {
    await jwtVerify(token, encodedSecret, { algorithms: ["HS256"] });
    return true;
  } catch {
    return false;
  }
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const isProtected = pathname.startsWith(PROTECTED_PREFIX);
  const isLoginPage = pathname === LOGIN_PATH;

  if (!isProtected && !isLoginPage) {
    return NextResponse.next();
  }

  const authenticated = await hasValidSession(request);

  if (isProtected && !authenticated) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url));
  }

  if (isLoginPage && authenticated) {
    return NextResponse.redirect(new URL(PROTECTED_PREFIX, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/panel/:path*", "/login"],
};

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { locales, defaultLocale, isLocale } from "@/content/types";

const LOCALE_COOKIE = "NEXT_LOCALE";

function getPreferredLocale(request: NextRequest) {
  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  if (cookieLocale && isLocale(cookieLocale)) return cookieLocale;

  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLangs = acceptLanguage
    .split(",")
    .map((part) => part.split(";")[0]?.trim().slice(0, 2).toLowerCase());

  for (const lang of preferredLangs) {
    if (isLocale(lang)) return lang;
  }

  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)
  );
  if (pathnameHasLocale) return NextResponse.next();

  const locale = getPreferredLocale(request);
  const url = request.nextUrl.clone();
  url.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(url);
}

export const config = {
  // Skip Next internals and any request for a file with an extension
  // (images, favicon.ico, etc.) — only route-like paths get a locale prefix.
  matcher: ["/((?!_next|.*\\..*).*)"],
};

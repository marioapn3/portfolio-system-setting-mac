import { NextResponse, type NextRequest } from "next/server";
import { defaultLocale, locales, type Locale } from "@/lib/i18n";

/**
 * Locale gate: redirect locale-less paths to /<locale>/… using the visitor's
 * Accept-Language preference. `proxy` is the v16 rename of `middleware`.
 * Dependency-free negotiator (only two locales).
 */
function negotiate(acceptLanguage: string | null): Locale {
  if (!acceptLanguage) return defaultLocale;
  const ranked = acceptLanguage
    .split(",")
    .map((part) => {
      const [tag, q] = part.trim().split(";q=");
      return {
        primary: tag.split("-")[0].toLowerCase(),
        q: q ? Number.parseFloat(q) : 1,
      };
    })
    .sort((a, b) => b.q - a.q);
  for (const { primary } of ranked) {
    if (primary === "en" || primary === "id") return primary;
  }
  return defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const hasLocale = locales.some(
    (l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`),
  );
  if (hasLocale) return;

  const locale = negotiate(request.headers.get("accept-language"));
  request.nextUrl.pathname = `/${locale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  // Skip Next internals and anything that looks like a static file.
  matcher: ["/((?!_next|.*\\..*).*)"],
};

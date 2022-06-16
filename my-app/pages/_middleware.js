import { NextResponse } from "next/server";

const PUBLIC_FILE = /\.(.*)$/;

const stripDefaultLocale = (str) => {
  const stripped = str.replace("/default", "");
  return stripped;
};

export function middleware(request) {
  const { pathname, origin, locale, search } = request.nextUrl.clone();

  const shouldHandleLocale =
    !PUBLIC_FILE.test(pathname) &&
    !pathname.includes("/api/") &&
    locale === "default";

  const redirectURL = `${origin}/en${stripDefaultLocale(pathname)}${search}`;

  return shouldHandleLocale ? NextResponse.redirect(redirectURL) : undefined;
}

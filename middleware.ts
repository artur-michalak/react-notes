import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  localePrefix: "as-needed",
  // A list of all locales that are supported
  locales: ["en", "pl"],

  // Used when no locale matches
  defaultLocale: "pl",
});

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(pl|en)/:path*"],
};

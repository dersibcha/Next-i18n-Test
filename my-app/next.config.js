/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    // These are all the locales we support in the application
    locales: ["default", "en", "es"],
    // This is the default locale we use when visiting a non-locale prefixed path
    defaultLocale: "default",
    localeDetection: false,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

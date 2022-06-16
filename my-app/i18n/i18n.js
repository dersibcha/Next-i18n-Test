import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translations: {
          title: "i18n Next.js project",
          en: "English",
          es: "Spanish",
        },
      },
      es: {
        translations: {
          title: "i18n proyecto en Next.js",
          en: "Ingles",
          es: "Español",
        },
      },
    },
    fallbackLng: "en",
    debug: true,

    // Have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",

    // Use content as keys
    keySeparator: false,

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

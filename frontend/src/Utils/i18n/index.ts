import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import enNavbar from "./locales/en/navbar.json";
import enHero from "./locales/en/hero.json";
import enTopHeader from "./locales/en/topHeader.json";
import enBonus from "./locales/en/bonus.json";

import ukCommon from "./locales/uk/common.json";
import ukNavbar from "./locales/uk/navbar.json";
import ukHero from "./locales/uk/hero.json";
import ukTopHeader from "./locales/uk/topHeader.json";
import ukBonus from "./locales/uk/bonus.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      navbar: enNavbar,
      hero: enHero,
      topHeader: enTopHeader,
      bonus: enBonus,
    },
    uk: {
      common: ukCommon,
      navbar: ukNavbar,
      hero: ukHero,
      topHeader: ukTopHeader,
      bonus: ukBonus,
    },
  },
  fallbackLng: "uk",
  lng: "uk",
  ns: ["common", "navbar", "hero", "topHeader", "bonus"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

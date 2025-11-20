import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "./locales/en/common.json";
import enNavbar from "./locales/en/navbar.json";
import enHero from "./locales/en/hero.json";
import enTopHeader from "./locales/en/topHeader.json";
import enBonus from "./locales/en/bonus.json";
import enSortBouquet from "./locales/en/sortBouquetList.json";
import enOrderSteps from "./locales/en/orderSteps.json";
import enDelivery from "./locales/en/delivery.json";
import enFooter from "./locales/en/footer.json";

import ukCommon from "./locales/uk/common.json";
import ukNavbar from "./locales/uk/navbar.json";
import ukHero from "./locales/uk/hero.json";
import ukTopHeader from "./locales/uk/topHeader.json";
import ukBonus from "./locales/uk/bonus.json";
import ukSortBouquet from "./locales/uk/sortBouquetList.json";
import ukOrderSteps from "./locales/uk/orderSteps.json";
import ukDelivery from "./locales/uk/delivery.json";
import ukFooter from "./locales/uk/footer.json";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      navbar: enNavbar,
      hero: enHero,
      topHeader: enTopHeader,
      bonus: enBonus,
      sortBouquetList: enSortBouquet,
      orderSteps: enOrderSteps,
      delivery: enDelivery,
      footer: enFooter,
    },
    uk: {
      common: ukCommon,
      navbar: ukNavbar,
      hero: ukHero,
      topHeader: ukTopHeader,
      bonus: ukBonus,
      sortBouquetList: ukSortBouquet,
      orderSteps: ukOrderSteps,
      delivery: ukDelivery,
      footer: ukFooter,
    },
  },
  fallbackLng: "uk",
  lng: "uk",
  ns: [
    "common",
    "navbar",
    "hero",
    "topHeader",
    "bonus",
    "sortBouquetList",
    "orderSteps",
    "delivery",
    "footer",
  ],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

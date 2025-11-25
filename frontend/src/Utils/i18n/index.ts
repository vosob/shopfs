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
import enReviews from "./locales/en/reviews.json";
import enContactsInfo from "./locales/en/contactsInfo.json";
import enContacts from "./locales/en/contacts.json";
import enFormInfo from "./locales/en/formInfo.json";
import enAcardionInfo from "./locales/en/acardionInfo.json";
import enAcardionInput from "./locales/en/acardionInput.json";
import enLoginForm from "./locales/en/loginForm.json";
import enRegisterForm from "./locales/en/registerForm.json";
import enAuth from "./locales/en/auth.json";
import enBouquetItem from "./locales/en/bouquetItem.json";
import enFilters from "./locales/en/filters.json";
import enBasket from "./locales/en/basket.json";
import enBouquetById from "./locales/en/bouquetById.json";
import enProfile from "./locales/en/profile.json";
import enDiscountItems from "./locales/en/discount.json";
import enProfilePassword from "./locales/en/profilePassword.json";

import ukCommon from "./locales/uk/common.json";
import ukNavbar from "./locales/uk/navbar.json";
import ukHero from "./locales/uk/hero.json";
import ukTopHeader from "./locales/uk/topHeader.json";
import ukBonus from "./locales/uk/bonus.json";
import ukSortBouquet from "./locales/uk/sortBouquetList.json";
import ukOrderSteps from "./locales/uk/orderSteps.json";
import ukDelivery from "./locales/uk/delivery.json";
import ukFooter from "./locales/uk/footer.json";
import ukReviews from "./locales/uk/reviews.json";
import ukContactsInfo from "./locales/uk/contactsInfo.json";
import ukContacts from "./locales/uk/contacts.json";
import ukFormInfo from "./locales/uk/formInfo.json";
import ukAcardionInfo from "./locales/uk/acardionInfo.json";
import ukAcardionInput from "./locales/uk/acardionInput.json";
import ukLoginForm from "./locales/uk/loginForm.json";
import ukRegisterForm from "./locales/uk/registerForm.json";
import ukAuth from "./locales/uk/auth.json";
import ukBouquetItem from "./locales/uk/bouquetItem.json";
import ukFilters from "./locales/uk/filters.json";
import ukBasket from "./locales/uk/basket.json";
import ukBouquetById from "./locales/uk/bouquetById.json";
import ukProfile from "./locales/uk/profile.json";
import ukDiscountItems from "./locales/uk/discount.json";
import ukProfilePassword from "./locales/uk/profilePassword.json";

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
      reviews: enReviews,
      contact: enContactsInfo,
      contacts: enContacts,
      formInfoQuestion: enFormInfo,
      acardionInfo: enAcardionInfo,
      acardionInputForm: enAcardionInput,
      login: enLoginForm,
      register: enRegisterForm,
      authType: enAuth,
      bouquetItemPage: enBouquetItem,
      filters: enFilters,
      basket: enBasket,
      bouquetById: enBouquetById,
      profile: enProfile,
      discount: enDiscountItems,
      profilePassword: enProfilePassword,
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
      reviews: ukReviews,
      contact: ukContactsInfo,
      contacts: ukContacts,
      formInfoQuestion: ukFormInfo,
      acardionInfo: ukAcardionInfo,
      acardionInputForm: ukAcardionInput,
      login: ukLoginForm,
      register: ukRegisterForm,
      authType: ukAuth,
      bouquetItemPage: ukBouquetItem,
      filters: ukFilters,
      basket: ukBasket,
      bouquetById: ukBouquetById,
      profile: ukProfile,
      discount: ukDiscountItems,
      profilePassword: ukProfilePassword,
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
    "reviews",
    "contact",
    "contacts",
    "formInfoQuestion",
    "acardionInfo",
    "acardionInputForm",
    "login",
    "register",
    "authType",
    "bouquetItemPage",
    "filters",
    "basket",
    "bouquetById",
    "profile",
    "discount",
    "profilePassword",
  ],
  defaultNS: "common",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;

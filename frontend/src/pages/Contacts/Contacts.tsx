import { useTranslation } from "react-i18next";
import { ContactsInfo } from "../../components/ContactsPage/ContactsInfo/ContactsInfo";
import { FormInfo } from "../../components/ContactsPage/FormInfo/FormInfo";

import css from "./Contacts.module.css";

export const Contacts = () => {
  const { t } = useTranslation("contacts");
  return (
    <div>
      <div className={`${css.contactsContainer} ${"container"}`}>
        {t("title")}
      </div>
      <ContactsInfo />
      <FormInfo />
    </div>
  );
};

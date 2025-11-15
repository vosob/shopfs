import { ContactsInfo } from "../../components/ContactsPage/ContactsInfo/ContactsInfo";
import { FormInfo } from "../../components/ContactsPage/FormInfo/FormInfo";

import css from "./Contacts.module.css";

export const Contacts = () => {
  return (
    <div>
      <div className={`${css.contactsContainer} ${"container"}`}>
        Контактна інформація
      </div>
      <ContactsInfo />
      <FormInfo />
    </div>
  );
};

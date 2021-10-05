import { FC } from "react";
import "./Contacts.scss";
interface IPropsContacts {
  nameClass: string;
}
const Contacts: FC<IPropsContacts> = ({ nameClass }) => {
  return (
    <div className={nameClass}>
      <div className="contacts__hotLine">
        <p>Наша горячая линия</p>
        <p>8 800 38 23 112</p>
      </div>
      <div className="contacts__address">
        <p>Главный офис</p>
        <p>г. Москва, Садовническая ул., 80</p>
      </div>
      <div className="contacts__openingHours">
        <p>Часы работы</p>
        <p>Пн-Пт с 10:00 до 22:00</p>
      </div>
    </div>
  );
};

export default Contacts;

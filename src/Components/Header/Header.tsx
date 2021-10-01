import "./Header.scss";
import Button from "../Button/Button";
import LogoImg from "../Logoimg/LogoImg";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <LogoImg nameClass={"header__img"} />
          <Button nameClass={"header__btn"} content={"Подключить подписку"} />
        </div>
      </div>
    </header>
  );
};

export default Header;

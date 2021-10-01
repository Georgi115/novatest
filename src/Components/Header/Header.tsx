import "./Header.scss";
import Button from "../Button/Button";
import LogoImg from "../Logoimg/LogoImg";
import { Link } from "react-router-dom";
import { FC } from "react";

const Header: FC = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <LogoImg nameClass={"header__img"} />
          <Link className="header__link" to="/application">
            <Button nameClass={"header__btn"} content={"Подключить подписку"} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;

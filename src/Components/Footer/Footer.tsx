import { FC } from "react";
import LogoImg from "../Logoimg/LogoImg";
import SocialLogo from "../SocialLogo/SocialLogo";
import "./Footer.scss";

const Footer: FC = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <LogoImg nameClass={"footer__img"}></LogoImg>
        <p className="footer__text">Политика обработки персональных данных</p>
        <SocialLogo />
      </div>
    </footer>
  );
};

export default Footer;

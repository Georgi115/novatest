import "./Header.scss";
import headerImg from "../../images/headerImg.png";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <img className="header__img" src={headerImg} alt="header-img"></img>
          <button className="header__btn">Подключить подписку</button>{" "}
        </div>
      </div>
    </header>
  );
};

export default Header;

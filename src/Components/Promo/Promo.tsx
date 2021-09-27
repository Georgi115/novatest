import { FC } from "react";
import Button from "../Button/Button";
import "./Promo.scss";

const Promo: FC = () => {
  return (
    <div className="promo">
      <div className="container">
        <div className="promo__descriptionBlock">
          <p className="promo__title">Сериал Ведьмак</p>
          <p className="promo__description">
            Геральт из Ривии, наемный охотник за чудовищами, перенесший мутации,
            идет навстречу своей судьбе в неспокойном мире, где люди часто
            оказываются куда коварнее чудовищ.
          </p>
          <Button nameClass={"promo__btn"} content={"Смотреть сериал"} />
        </div>
      </div>
    </div>
  );
};

export default Promo;

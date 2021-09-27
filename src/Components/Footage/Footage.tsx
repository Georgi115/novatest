import { FC } from "react";
import Button from "../Button/Button";
import "./Footage.scss";

const Footage: FC = () => {
  return (
    <div className="footage">
      <div className="container">
        <div className="footage__title">
          <p>Кадры со сьемок</p>
        </div>
        <div className="footage__photo">
          <div className="footage__photoMain"></div>
          <div className="footage__photosItems">
            <div className="footage__photoItem footage__photoItem_1 "></div>
            <div className="footage__photoItem footage__photoItem_2"></div>
            <div className="footage__photoItem footage__photoItem_3"></div>
            <div className="footage__photoItem footage__photoItem_4"></div>
          </div>
        </div>
        <Button nameClass={"footage__btn"} content={"Показать еще"} />
      </div>
    </div>
  );
};

export default Footage;

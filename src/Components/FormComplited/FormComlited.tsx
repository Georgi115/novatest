import React, { FC } from "react";
import Button from "../Button/Button";
import "./FormComplited.scss";
import { useHistory } from "react-router";
import { changeComplited } from "../../redux/FormSlice";
import { useAppDispatch } from "../../redux";

const FormComplited: FC = () => {
  const dispatch = useAppDispatch();
  const history = useHistory();
  const handlerClickBtnFrom = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeComplited());
    history.push("/");
  };
  return (
    <div className="formComplited">
      <p className="formComplited__title">Заявка отправлена</p>
      <p className="formComplited__text">
        Мы получили вашу заявку. Наши специалисты свяжутся с вами в ближайшее
        время, чтобы уточнить все детали заказа.
      </p>
      <div
        onClick={(e) => handlerClickBtnFrom(e)}
        className="formComplited__btnBlock"
      >
        <Button
          nameClass={"formComplited__btn"}
          content={"Вернуться на главную"}
        ></Button>
      </div>
    </div>
  );
};

export default FormComplited;

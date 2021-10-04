import Button from "../Button/Button";
import "./ApplicationForm.scss";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../redux";
import {
  changeInputPhone,
  changeInputName,
  ClickInputCity,
  changeEmailInput,
  changeTextInput,
  changeCheckedInput,
  submitClicked,
  clickCity,
} from "../../redux/FormSlice";
import React, { MouseEvent } from "react";

const ApplicationForm = () => {
  const dispatch = useAppDispatch();
  //Selectors
  const viewDropBlock = useSelector(
    (state: RootState): boolean => state.FormSlice.viewDropBlock
  );
  const error = useSelector(
    (state: RootState): boolean => state.FormSlice.error
  );
  const checked = useSelector(
    (state: RootState): boolean => state.FormSlice.checked
  );
  const city = useSelector((state: RootState): string => state.FormSlice.city);
  const name = useSelector((state: RootState): string => state.FormSlice.name);
  const email = useSelector(
    (state: RootState): string => state.FormSlice.email
  );
  const text = useSelector((state: RootState): string => state.FormSlice.text);

  const phone = useSelector(
    (state: RootState): string => state.FormSlice.matrix
  );
  //Selectors

  //handlers
  const clickCityItem = (e: MouseEvent<HTMLParagraphElement>) => {
    dispatch(clickCity(e.target));
  };
  const submitClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    dispatch(submitClicked());
  };
  const changeChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeCheckedInput(e.target.checked));
  };
  const changeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(changeTextInput(e.target.value));
  };
  const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeEmailInput(e.target.value));
  };
  const changeViewDrop = (e: React.MouseEvent<HTMLInputElement>) => {
    dispatch(ClickInputCity());
  };
  const mouseUp = (e: any) => {
    e.target.setSelectionRange(3, 3);
  };

  const changePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputPhone(e.target.value));
  };
  const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeInputName(e.target.value));
  };
  //handlers
  const matrix = phone.match(/\d/g);
  console.log(city);
  return (
    <div className="applicationForm">
      <p className="applicationForm__title">Оставьте заявку</p>
      <form className="applicationForm__form">
        <div className="applicationForm__selectBlock">
          <input
            value={city}
            readOnly
            onClick={(e) => changeViewDrop(e)}
            className={
              error && city.trim() === "Выберите город"
                ? "applicationForm__select applicationForm__errorInput"
                : "applicationForm__select"
            }
          ></input>
          <i className="fa fa-angle-down fa-lg "></i>
          <div
            className={
              viewDropBlock
                ? "applicationForm__select_drop applicationForm__select_dropView"
                : "applicationForm__select_drop"
            }
          >
            <p onClick={(e) => clickCityItem(e)}>Москва</p>
            <p onClick={(e) => clickCityItem(e)}>Ростов</p>
            <p onClick={(e) => clickCityItem(e)}>Пенза</p>
          </div>
          <p
            className={
              error && city.trim() === "Выберите город"
                ? "applicationForm__error applicationForm__error_view"
                : "applicationForm__error"
            }
          >
            Город не выбран
          </p>
        </div>
        <div className="applicationForm__blockName">
          <input
            onChange={(e) => changeName(e)}
            value={name}
            className={
              error && name.trim() === ""
                ? "applicationForm__name applicationForm__errorInput"
                : "applicationForm__name"
            }
            type="name"
            placeholder="Имя"
          ></input>
          <p
            className={
              error && name.trim() === ""
                ? "applicationForm__error applicationForm__error_view"
                : "applicationForm__error"
            }
          >
            Введите имя
          </p>
        </div>

        <div className="applicationForm__phoneAndEmail">
          <input
            value={email}
            onChange={(e) => changeEmail(e)}
            className={
              error && email.trim() === ""
                ? "applicationForm__email applicationForm__errorInput"
                : "applicationForm__email"
            }
            placeholder="email"
          ></input>
          <p
            className={
              error && email.trim() === ""
                ? "applicationForm__error applicationForm__error_view"
                : "applicationForm__error"
            }
          >
            Введите email
          </p>
          <input
            onMouseUp={(e) => mouseUp(e)}
            onChange={(e) => changePhone(e)}
            value={phone}
            className={
              error && matrix?.length !== 11
                ? "applicationForm__phone applicationForm__errorInput"
                : "applicationForm__phone"
            }
          ></input>
          <p
            style={{ left: "53%" }}
            className={
              error && matrix?.length !== 11
                ? "applicationForm__error applicationForm__error_view"
                : "applicationForm__error"
            }
          >
            Введите телефон
          </p>
        </div>
        <div className="applicationForm__blockText">
          <textarea
            value={text}
            onChange={(e) => changeText(e)}
            className={
              error && text.trim() === ""
                ? "applicationForm__text applicationForm__errorInput"
                : "applicationForm__text"
            }
            placeholder="Оставьте пометку к заказу"
          ></textarea>
          <p
            className={
              error && text.trim() === ""
                ? "applicationForm__error applicationForm__error_text applicationForm__error_view"
                : "applicationForm__error applicationForm__error_text"
            }
          >
            Напишите техт
          </p>
        </div>

        <label className="applicationForm__label">
          Прикрепить файл
          <i className="fa fa-paperclip fa-lg"></i>
          <input className="applicationForm__file" type="file" />
        </label>
        <div className="applicationForm__checkbox">
          <input
            onChange={(e) => changeChecked(e)}
            className="applicationForm__inputCheckbox"
            type="checkbox"
            id="formCheckbox"
          ></input>
          <label
            className={
              error && !checked
                ? "applicationForm__checkboxLabel applicationForm__errorChecked"
                : "applicationForm__checkboxLabel"
            }
            htmlFor="formCheckbox"
          >
            Я соглашаюсь на обработку своих персональных данных
          </label>
          <p
            className={
              error && !checked
                ? "applicationForm__error applicationForm__error_checked applicationForm__error_view"
                : "applicationForm__error applicationForm__error_checked"
            }
          >
            Поле не заполнено
          </p>
        </div>
        <div
          onClick={(e) => submitClick(e)}
          className="applicationForm__btnBlock"
        >
          <Button
            nameClass={"applicationForm__btn"}
            content={"Оставить заявку"}
          ></Button>
        </div>
      </form>
    </div>
  );
};

export default ApplicationForm;

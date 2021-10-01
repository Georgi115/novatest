import Button from "../Button/Button";
import "./ApplicationForm.scss";

const ApplicationForm = () => {
  return (
    <div className="applicationForm">
      <p className="applicationForm__title">Оставьте заявку</p>
      <form className="applicationForm__form">
        <div className="applicationForm__selectBlock">
          <select className="applicationForm__select">
            <option value="default">Выберите город</option>
            <option value="Москва">Москва</option>
            <option value="Ростов">Ростов</option>
            <option value="Пенза">Пенза</option>
          </select>
          <i className="fa fa-angle-down fa-lg "></i>
        </div>

        <input
          className="applicationForm__name"
          type="name"
          placeholder="Имя"
        ></input>
        <div className="applicationForm__phoneAndEmail">
          <input className="applicationForm__email" placeholder="email"></input>
          <input className="applicationForm__phone"></input>
        </div>
        <textarea
          className="applicationForm__text"
          placeholder="Оставьте пометку к заказу"
        ></textarea>
        <label className="applicationForm__label">
          Прикрепить файл
          <i className="fa fa-paperclip fa-lg"></i>
          <input className="applicationForm__file" type="file" />
        </label>
        <div className="applicationForm__checkbox">
          <input
            className="applicationForm__inputCheckbox"
            type="checkbox"
            id="formCheckbox"
          ></input>
          <label
            className="applicationForm__checkboxLabel"
            htmlFor="formCheckbox"
          >
            Я соглашаюсь на обработку своих персональных данных
          </label>
        </div>

        <Button
          nameClass={"applicationForm__btn"}
          content={"Оставить заявку"}
        ></Button>
      </form>
    </div>
  );
};

export default ApplicationForm;

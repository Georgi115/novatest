import "./Promo.scss";

const Promo = () => {
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
          <button className="promo__btn"> Смотреть сериал</button>
        </div>
      </div>
    </div>
  );
};

export default Promo;

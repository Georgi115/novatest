import "./Cast.scss";
const Cast = () => {
  return (
    <div className="cast">
      <div className="cast__title container">
        <div className="cast__textTitle">
          <p className="cast__text">Актерский состав</p>
          <div className="cast__arrows">
            <i className="fa fa-angle-left fa-3x cast__arrowLeft "></i>
            <i className="fa fa-angle-right fa-3x cast__cast__arrowRight cast__arrowActive"></i>
          </div>
        </div>
        <div className="cast__stripe">
          <div className="cast__progressStripe"></div>
        </div>
      </div>
    </div>
  );
};

export default Cast;

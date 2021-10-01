import React, { FC, useEffect } from "react";
import {
  changePosition,
  ICastArr,
  IChangePosition,
} from "../../redux/sliderSlice";
import { useAppDispatch } from "../../redux";
import "./Cast.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import {
  positionCast,
  positionProgressStripe,
} from "../../helpers/positionCastElement";

const Cast: FC = () => {
  const dispatch = useAppDispatch();
  //selectors
  const position = useSelector(
    (state: RootState): number => state.sliderSlice.position
  );
  const widthScreen = useSelector(
    (state: RootState): number => state.sliderSlice.widthScreen
  );
  const maxPosition = useSelector(
    (state: RootState): number => state.sliderSlice.maxPosition
  );
  const castArray = useSelector(
    (state: RootState): ICastArr[] => state.sliderSlice.castArray
  );
  const positionTransfromCastPhoto = useSelector(
    (state: RootState) => state.sliderSlice.positionCastPhoto
  );
  const widthStripe = useSelector(
    (state: RootState) => state.sliderSlice.widthProgressStripe
  );
  //selectors
  //handlers
  const changePositionClick = (e: React.MouseEvent, obj: IChangePosition) => {
    dispatch(changePosition(obj));
  };
  //handlers

  const positionCastPhoto = positionCast(widthScreen, position);
  const widthProgressStripe = positionProgressStripe(widthScreen, maxPosition);
  useEffect(() => {
    dispatch(
      changePosition({
        widthProgressStripe: widthProgressStripe,
        positionCastPhoto: 0,
        num: 0,
      })
    );
  }, []);

  const classLeftArrow = position !== 1 ? "cast__arrowActive" : null;
  const classRightArrow = position !== maxPosition ? "cast__arrowActive" : null;
  return (
    <div className="cast">
      <div className="container">
        <div className="cast__title">
          <div className="cast__textTitle">
            <p className="cast__text">Актерский состав</p>
            <div className="cast__arrows">
              <i
                onClick={(e) =>
                  changePositionClick(e, {
                    positionCastPhoto: positionCastPhoto,
                    num: -1,
                    widthProgressStripe: -widthProgressStripe,
                  })
                }
                className={`fa fa-angle-left fa-3x cast__arrowLeft ${classLeftArrow}`}
              ></i>
              <i
                onClick={(e) =>
                  changePositionClick(e, {
                    positionCastPhoto: -positionCastPhoto,
                    num: 1,
                    widthProgressStripe: widthProgressStripe,
                  })
                }
                className={`fa fa-angle-right fa-3x cast__arrowRight ${classRightArrow}`}
              ></i>
            </div>
          </div>
          <div className="cast__stripe">
            <div
              style={{ width: `${widthStripe}px` }}
              className={`cast__progressStripe`}
            ></div>
          </div>
        </div>

        <div className="cast__photo ">
          <ul
            style={{ transform: `translateX(${positionTransfromCastPhoto}px)` }}
            className={`cast__photoList ${positionCastPhoto}`}
          >
            {castArray.map((el, id) => {
              return (
                <li
                  key={id}
                  style={{ backgroundImage: `url(${el.img})` }}
                  className="cast__photoItem cast__photoItem_ciri"
                >
                  <div className="cast__textActor">
                    <p className="cast__character">{el.characterName}</p>
                    <p className="cast__nameActor">{el.actorName}</p>
                  </div>
                  <div className="cast__backBlockPhoto">
                    <p className="cast__backBlockPhotoText">{el.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cast;

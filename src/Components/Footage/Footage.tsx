import React, { FC } from "react";
import Button from "../Button/Button";
import "./Footage.scss";
import { changeCount, changeLoading } from "../../redux/footageSlice";
import { RootState, useAppDispatch } from "../../redux";
import { useSelector } from "react-redux";

const Footage: FC = () => {
  const dispatch = useAppDispatch();
  //selectors
  const count = useSelector(
    (state: RootState): string[] => state.footageSlice.count
  );
  const maxCount = useSelector(
    (state: RootState): number => state.footageSlice.maxCount
  );
  const loading = useSelector(
    (state: RootState): boolean => state.footageSlice.loading
  );
  //selectors
  //handlers
  const clickChangeCount = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(changeLoading());
    setTimeout(() => dispatch(changeCount()), 1000);
  };
  //handlers
  return (
    <div className="footage">
      <div className="container">
        <div className="footage__title">
          <p>Кадры со сьемок</p>
        </div>
        {count.map((el, id) => {
          return (
            <div key={id} className="footage__photo">
              <div className="footage__photoMain"></div>
              <div className="footage__photosItems">
                <div className="footage__photoItem footage__photoItem_1 "></div>
                <div className="footage__photoItem footage__photoItem_2"></div>
                <div className="footage__photoItem footage__photoItem_3"></div>
                <div className="footage__photoItem footage__photoItem_4"></div>
              </div>
            </div>
          );
        })}
        {count.length >= maxCount ? null : (
          <div onClick={(e) => clickChangeCount(e)}>
            <Button
              nameClass={"footage__btn"}
              content={loading ? "loading..." : "Показать еще"}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Footage;

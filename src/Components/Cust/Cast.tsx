import { FC } from "react";
import "./Cast.scss";
const Cast: FC = () => {
  return (
    <div className="cast">
      <div className="container">
        <div className="cast__title">
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

        <div className="cast__photo">
          <ul className="cast__photoList">
            <li className="cast__photoItem cast__photoItem_vedmak">
              <div className="cast__textActor">
                <p className="cast__character">Геральт</p>
                <p className="cast__nameActor">Генри Кавилл</p>{" "}
              </div>
              <div className="cast__backBlockPhoto">
                <p className="cast__backBlockPhotoText">
                  Геральт — одинокий охотник на чудовищ, который отчаянно
                  пытается найти место в мире, где люди зачастую оказываются
                  хуже монстров.
                </p>
              </div>
            </li>
            <li className="cast__photoItem cast__photoItem_lutik">
              <div className="cast__textActor">
                <p className="cast__character">Лютик</p>
                <p className="cast__nameActor">Джоэ Бэти</p>
              </div>
              <div className="cast__backBlockPhoto">
                <p className="cast__backBlockPhotoText">
                  Один из центральных персонажей сериала, лучший друг и
                  неизменный спутник Геральта, трубадур и бабник
                </p>
              </div>
            </li>
            <li className="cast__photoItem cast__photoItem_anna">
              <div className="cast__textActor">
                <p className="cast__character">Йеннифэр</p>
                <p className="cast__nameActor">Аня Чалотра</p>
              </div>
              <div className="cast__backBlockPhoto">
                <p className="cast__backBlockPhotoText">
                  Персонаж сериала «Ведьмак», чародейка, обучавшаяся магии в
                  школе для юных волшебниц Аретуза под руководством Тиссаи де
                  Врие.
                </p>
              </div>
            </li>
            <li className="cast__photoItem cast__photoItem_ciri">
              <div className="cast__textActor">
                <p className="cast__character">Цири</p>
                <p className="cast__nameActor">Фрейя Аллан</p>
              </div>
              <div className="cast__backBlockPhoto">
                <p className="cast__backBlockPhotoText">
                  Цири — дочь Паветты и Дани, внучка королевы Цинтры Калантэ.
                  Цири любила сбегать из дворца и играть в городе с мальчишками,
                  живо интересовалась военно-политическими обсуждениями бабушки,
                  негодуя из-за того, что в её возрасте бабушка была уже
                  знаменита своими подвигами, а её держат во дворце.
                </p>
              </div>
            </li>
            <li className="cast__photoItem cast__photoItem_bart">
              <div className="cast__textActor">
                <p className="cast__character">Эмгыр вар Эмрейс</p>
                <p className="cast__nameActor">Барт Эдвардс</p>
              </div>
              <div className="cast__backBlockPhoto">
                <p className="cast__backBlockPhotoText">
                  Персонаж сериала «Ведьмак», мужчина, на которого было наложено
                  заклятье, превращающее его в человекоподобного ежа.
                </p>
              </div>
            </li>
            <li className="cast__photoItem cast__photoItem_ciri">
              <div className="cast__textActor">
                <p className="cast__character">Цири</p>
                <p className="cast__nameActor">Фрейя Аллан</p>
              </div>
              <div className="cast__backBlockPhoto">
                <p className="cast__backBlockPhotoText">
                  Цири — дочь Паветты и Дани, внучка королевы Цинтры Калантэ.
                  Цири любила сбегать из дворца и играть в городе с мальчишками,
                  живо интересовалась военно-политическими обсуждениями бабушки,
                  негодуя из-за того, что в её возрасте бабушка была уже
                  знаменита своими подвигами, а её держат во дворце.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cast;

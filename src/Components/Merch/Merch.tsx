import "./Merch.scss";
import { YMaps, Map, Placemark } from "react-yandex-maps";
import { FC } from "react";

const Merch: FC = () => {
  const coordinates = [
    [55.75, 37.57],
    [55.6772, 37.8932],
    [55.678, 37.2777],
  ];
  return (
    <div className="map">
      <div className="container">
        <div className="map__title">
          <p>Магазины мерча ведьмака</p>
        </div>
      </div>
      <div className="container map__container">
        <div className="merch__map">
          <YMaps>
            <Map
              className="map__ymap"
              defaultState={{ center: [55.75, 37.57], zoom: 9 }}
            >
              {coordinates.map((coordinate, id) => (
                <Placemark geometry={coordinate} key={id} />
              ))}
            </Map>
          </YMaps>
        </div>
      </div>
    </div>
  );
};

export default Merch;

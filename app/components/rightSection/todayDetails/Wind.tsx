import React from "react";
import { FaWind } from "react-icons/fa";
import useWeatherStore from "@/app/store/weatherStore";
import { ImCompass } from "react-icons/im";


const Wind = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);

  let wind_kph: string = weatherData && weatherData.current.wind_kph;
  let wind_dir: string = weatherData && weatherData.current.wind_dir;
  let visibility: string = weatherData && weatherData.current.vis_km;
  return (
    <div className="bg-white rounded-2xl p-5">
      <header className="flex mb-3">
        <p className="text-slate-500 font-bold">Wind Status</p>
        <FaWind className="m-1 text-green-500" />
      </header>
      <div className="flex">
        <p className="text-3xl whitespace-nowrap">{wind_kph}</p><span className="mt-auto ml-1">km/h</span>
      </div>
      <div className="flex">
        <ImCompass className="m-1" />
        <p>{wind_dir}</p>
      </div>
      <p className="mt-2">Visibility: {visibility} km</p>
    </div>
  );
};

export default Wind;

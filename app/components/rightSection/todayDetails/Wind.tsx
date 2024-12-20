import React from "react";
import { motion } from "motion/react"
import { FaWind } from "react-icons/fa";
import useWeatherStore from "@/app/store/weatherStore";
import { ImCompass } from "react-icons/im";
import DetailsSkeleton from "../../skeleton/DetailsSkeleton";

const Wind = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  const wind_kph = weatherData && weatherData.current.wind_kph;
  const wind_dir = weatherData && weatherData.current.wind_dir;
  const visibility = weatherData && weatherData.current.vis_km;
  if (initialLoad) {
    return <DetailsSkeleton />;
  }
  return (
    <motion.div
      className="bg-white rounded-lg md:rounded-2xl py-5 px-3 md:p-5"
      role="region"
      aria-labelledby="wind-status"
      whileHover={{scale: 1.05}}
    >
      <header className="flex mb-3">
        <p className="text-slate-500 font-bold" id="wind-status">
          Wind Status
        </p>
        <FaWind className="m-1 text-green-500" aria-hidden="true" />
      </header>
      <div className="flex">
        <p className="text-3xl whitespace-nowrap" aria-live="polite">
          {wind_kph}
        </p>
        <span className="mt-auto ml-1">km/h</span>
      </div>
      <div className="flex">
        <ImCompass className="m-1" aria-hidden="true" />
        <p>{wind_dir}</p>
      </div>
      <p className="mt-2" aria-live="polite">
        Visibility: {visibility} km
      </p>
    </motion.div>
  );
};

export default Wind;

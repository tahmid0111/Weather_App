import React from "react";
import useWeatherStore from "@/app/store/weatherStore";
import { FaArrowUp, FaArrowDown, FaMoon } from "react-icons/fa";
import DetailsSkeleton from "../../skeleton/DetailsSkeleton";

const Moon = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  const moon_phase: string =
    weatherData && weatherData.forecast.forecastday[0].astro.moon_phase;
  const moonrise: string =
    weatherData && weatherData.forecast.forecastday[0].astro.moonrise;
  const moonset: string =
    weatherData && weatherData.forecast.forecastday[0].astro.moonset;
  if (initialLoad) {
    return <DetailsSkeleton />;
  }
  return (
    <div className="bg-white rounded-lg md:rounded-2xl py-5 px-3 md:p-5">
      <header className="flex mb-5">
        <p className="text-slate-500 font-bold">Night</p>{" "}
        <FaMoon className="m-1 text-yellow-500" />
      </header>
      <p>{moon_phase} Moon</p>
      <div className="flex mt-2">
        <FaArrowUp className="m-1 text-yellow-500" />{" "}
        <p>Moon rise: {moonrise}</p>
      </div>
      <div className="flex">
        <FaArrowDown className="m-1 text-yellow-500" />{" "}
        <p>Moon set: {moonset}</p>
      </div>
    </div>
  );
};

export default Moon;

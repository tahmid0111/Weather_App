import useWeatherStore from "@/app/store/weatherStore";
import { displayDate } from "@/app/utilities/date.helper";
import React from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import IconSkeleton from "../skeleton/IconSkeleton";
import Image from "next/image";

const WeatherIcon = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  const condition: string = weatherData && weatherData.current.condition.icon;
  const text: string = weatherData && weatherData.current.condition.text;
  const avgTemp: number =
    weatherData && weatherData.forecast.forecastday[0].day.avgtemp_c;
  const today =
    weatherData && displayDate(weatherData.forecast.forecastday[0].date_epoch);
  const rise = weatherData && weatherData.forecast.forecastday[0].astro.sunrise;
  const set = weatherData && weatherData.forecast.forecastday[0].astro.sunset;
  if (initialLoad) {
    return <IconSkeleton />;
  }
  return (
    <div className="text-center lg:mt-10">
      <img src={condition} alt={text} className="w-1/3 xxm:w-1/5 sm:w-1/6 mx-auto" />
      <p className="text-5xl font-bold mb-2 lg:mb-5">
        {avgTemp}
        <sup>&#8451;</sup>
      </p>
      <p>{today}</p>
      <div className="flex mt-10 xxm:mt-3 lg:mt-10 mb-3">
        <FaArrowUp className="m-1 text-blue-500" /> <p>Sunrise: {rise}</p>
      </div>
      <div className="flex">
        <FaArrowDown className="m-1 text-blue-500" /> <p>Sunset: {set}</p>
      </div>
    </div>
  );
};

export default WeatherIcon;

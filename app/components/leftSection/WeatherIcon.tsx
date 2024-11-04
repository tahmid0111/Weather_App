import useWeatherStore from "@/app/store/weatherStore";
import { displayDate } from "@/app/utilities/date.helper";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import IconSkeleton from "../skeleton/IconSkeleton";

const WeatherIcon = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  let condition: string = weatherData && weatherData.current.condition.icon;
  let text: string = weatherData && weatherData.current.condition.text;
  let avgTemp: number =
    weatherData && weatherData.forecast.forecastday[0].day.avgtemp_c;
  let today: any =
    weatherData && displayDate(weatherData.forecast.forecastday[0].date_epoch);
  let rise: any =
    weatherData && weatherData.forecast.forecastday[0].astro.sunrise;
  let set: any =
    weatherData && weatherData.forecast.forecastday[0].astro.sunset;
  if (initialLoad) {
    return <IconSkeleton />;
  }
  return (
    <div className="text-center mt-10">
      <img src={condition} alt={text} className="w-1/4 mx-auto" />
      <p className="text-5xl font-bold mb-5">
        {avgTemp}
        <sup>&#8451;</sup>
      </p>
      <p>{today}</p>
      <div className="flex mt-10 mb-3">
        <FaArrowUp className="m-1 text-blue-500" /> <p>Sunrise: {rise}</p>
      </div>
      <div className="flex">
        <FaArrowDown className="m-1 text-blue-500" /> <p>Sunset: {set}</p>
      </div>
    </div>
  );
};

export default WeatherIcon;

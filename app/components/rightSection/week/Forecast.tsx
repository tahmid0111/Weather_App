"use client";
import React from "react";
import useWeatherStore from "@/app/store/weatherStore";
import { getDayOfWeek } from "@/app/utilities/date.helper";
import { avgTemp } from "@/app/utilities/weather.helper";
import ForecastSkeleton from "../../skeleton/ForecastSkeleton";

const Forecast = ({ dayNum }: { dayNum: number }) => {
  const ForecastData = useWeatherStore((state) => state.forecastData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  const myDate = ForecastData && ForecastData.daily.time[`${dayNum}`];
  const today = myDate && getDayOfWeek(myDate);

  const max_temp_c =
    ForecastData && ForecastData.daily.temperature_2m_max[`${dayNum}`];
  const min_temp_c =
    ForecastData && ForecastData.daily.temperature_2m_min[`${dayNum}`];
  const temp = max_temp_c ? min_temp_c && avgTemp(max_temp_c, min_temp_c) : "";
  if (initialLoad) {
    return <ForecastSkeleton />;
  }
  return (
    <article
      className="bg-white px-1 py-5 rounded-2xl mx-1 xl:mx-2 text-center"
      aria-label={`Weather information for ${today}`}
    >
      <p className="font-bold" aria-label={`Date: ${today}`}>
        {today}
      </p>
      <p
        className="text-2xl my-3 text-blue-500 font-bold"
        aria-label={`Temperature: ${temp} degrees Celsius`}
      >
        {temp}
        <sup>&#8451;</sup>
      </p>
    </article>
  );
};

export default Forecast;

"use client";
import React from "react";
import useWeatherStore from "@/app/store/weatherStore";
import { getDayOfWeek } from "@/app/utilities/date.helper";
import { avgTemp } from "@/app/utilities/weather.helper";

const Forecast = ({ dayNum }: { dayNum: number }) => {
  const ForecastData = useWeatherStore((state) => state.forecastData);

  let myDate: string = ForecastData && ForecastData.daily.time[`${dayNum}`];
  let today: string = getDayOfWeek(myDate);

  let max_temp_c: number =
    ForecastData && ForecastData.daily.temperature_2m_max[`${dayNum}`];
  let min_temp_c: number =
    ForecastData && ForecastData.daily.temperature_2m_min[`${dayNum}`];
  let temp: number = avgTemp(max_temp_c, min_temp_c);
  return (
    <article className="bg-white px-1 py-5 rounded-2xl mx-3 text-center">
      <p className="font-bold">{today}</p>
      <p className="text-2xl my-3 text-blue-500 font-bold">
        {temp}
        <sup>&#8451;</sup>
      </p>
    </article>
  );
};

export default Forecast;

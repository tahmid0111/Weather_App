import React from "react";
import useWeatherStore from "@/app/store/weatherStore";
import { displayDate2 } from "@/app/utilities/date.helper";

const Forecast = ({ dayNum }: { dayNum: number }) => {
  const weatherData = useWeatherStore((state) => state.weatherData);

  let today: any =
    weatherData &&
    displayDate2(weatherData.forecast.forecastday[`${dayNum}`].date_epoch);
  let temp_c: string =
    weatherData && weatherData.forecast.forecastday[`${dayNum}`].day.avgtemp_c;
  let condition: string =
    weatherData &&
    weatherData.forecast.forecastday[`${dayNum}`].day.condition.text;

  return (
    <article className="bg-white px-1 py-5 rounded-2xl mx-3 text-center">
      <p className="font-bold">{today}</p>
      <p className="text-2xl my-3 text-blue-500 font-bold">
        {temp_c}
        <sup>&#8451;</sup>
      </p>
      <p>{condition}</p>
    </article>
  );
};

export default Forecast;

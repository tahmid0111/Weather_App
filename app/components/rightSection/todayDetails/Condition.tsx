import React from "react";
import useWeatherStore from "@/app/store/weatherStore";

const Condition = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  
  let condition: string = weatherData && weatherData.current.condition.text;
  let conditionDay: string =
    weatherData && weatherData.forecast.forecastday[0].day.condition.text;
  let location: string =
    weatherData &&
    `${weatherData.location.name}, ${weatherData.location.country}`;
  return (
    <>
      <h1 className="text-6xl font-semibold text-pretty">{condition}</h1>
      <h1 className="text-2xl font-semibold mt-3">Chances: {conditionDay}</h1>
      <h1 className="font-bold text-blue-500 mt-5">{location}</h1>
    </>
  );
};

export default Condition;

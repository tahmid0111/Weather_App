import React from "react";
import useWeatherStore from "@/app/store/weatherStore";

const TodayWeather = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  console.log(weatherData)
  return (
    <div className="w-full h-screen">
      <h1>{weatherData && weatherData.location.name}</h1>
      <h1>{weatherData && weatherData.location.country}</h1>
    </div>
  );
};

export default TodayWeather;

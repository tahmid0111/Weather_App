import useWeatherStore from "@/app/store/weatherStore";
import { displayDate } from "@/app/utilities/date.helper";
import React, { useState } from "react";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const WeatherIcon = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const [loadingImage, setLoadingImage] = useState(true);

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

  const handleImageLoad = () => {
    setLoadingImage(false);
  };

  return (
    <div className="text-center mt-10">
      {loadingImage && (
        <div className="w-1/4 mx-auto">
          <div className="skeleton h-32 w-32e"></div>
        </div>
      )}
      <img
        src={condition}
        alt={text}
        className="w-1/4 mx-auto"
        onLoad={handleImageLoad}
      />
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

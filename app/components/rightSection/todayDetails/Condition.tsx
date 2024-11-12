import React from "react";
import useWeatherStore from "@/app/store/weatherStore";
import ConditionSkeleton from "../../skeleton/ConditionSkeleton";

const Condition = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  const condition = weatherData && weatherData.current.condition.text;
  const conditionDay =
    weatherData && weatherData.forecast.forecastday[0].day.condition.text;
  const location =
    weatherData &&
    `${weatherData.location.name}, ${weatherData.location.country}`;
  if (initialLoad) {
    return <ConditionSkeleton />;
  }
  return (
    <>
      <h1 className="text-6xl font-semibold text-pretty" role="heading">
        {condition}
      </h1>
      <h1 className="text-2xl font-semibold mt-3" role="heading">
        {conditionDay}
      </h1>
      <h1 className="font-bold text-blue-500 mt-5 mr-2" role="heading">
        {location}
      </h1>
    </>
  );
};

export default Condition;

import React from "react";
import Forecast from "./Forecast";

const WeatherForecast = () => {
  return (
    <>
      <div
        className="col-span-6 xxm:col-span-3 md:col-span-2 mb-2"
        role="region"
        aria-labelledby="forecast-day-1"
      >
        <Forecast dayNum={1} />
      </div>
      <div
        className="col-span-6 xxm:col-span-3 md:col-span-2 mb-2"
        role="region"
        aria-labelledby="forecast-day-2"
      >
        <Forecast dayNum={2} />
      </div>
      <div
        className="col-span-6 xxm:col-span-3 md:col-span-2 mb-2"
        role="region"
        aria-labelledby="forecast-day-3"
      >
        <Forecast dayNum={3} />
      </div>
      <div
        className="col-span-6 xxm:col-span-3 md:col-span-2 mb-2"
        role="region"
        aria-labelledby="forecast-day-4"
      >
        <Forecast dayNum={4} />
      </div>
      <div
        className="col-span-6 xxm:col-span-3 md:col-span-2 mb-2"
        role="region"
        aria-labelledby="forecast-day-5"
      >
        <Forecast dayNum={5} />
      </div>
      <div
        className="col-span-6 xxm:col-span-3 md:col-span-2 mb-2"
        role="region"
        aria-labelledby="forecast-day-6"
      >
        <Forecast dayNum={6} />
      </div>
    </>
  );
};

export default WeatherForecast;

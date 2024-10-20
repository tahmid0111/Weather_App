import useWeatherStore from "@/app/store/weatherStore";
import { AirQualityHelper, HumidityHelper } from "@/app/utilities/weather.helper";
import React from "react";

const AirQuality = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);

  let humidty: number =
    weatherData &&
    weatherData.current.humidity;
  let air: number =
    weatherData &&
    weatherData.forecast.forecastday[0].day.air_quality["us-epa-index"];
  let AQ = AirQualityHelper(air);
  let HD = HumidityHelper(humidty);

  return (
    <div className="mt-10">
      <section>
        <progress
          value={AQ.level}
          max="6"
          className="progress progress-success h-2 w-3/5"
        ></progress>
        <p className="font-bold text-pretty">{AQ.message}</p>
      </section>
      <section>
        <progress
          value={HD.level}
          max="4"
          className="progress progress-warning h-2 w-3/5"
        ></progress>
        <p className="font-bold">{HD.message}</p>
        <p className="text-pretty">{HD.details}</p>
      </section>
    </div>
  );
};

export default AirQuality;

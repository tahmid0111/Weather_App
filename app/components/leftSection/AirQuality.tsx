import useWeatherStore from "@/app/store/weatherStore";
import {
  AirQualityHelper,
  HumidityHelper,
} from "@/app/utilities/weather.helper";
import React from "react";
import AirSkeleton from "../skeleton/AirSkeleton";

const AirQuality = () => {
  const weatherData = useWeatherStore((state) => state.weatherData);
  const initialLoad = useWeatherStore((state) => state.initialLoad);

  const humidty = weatherData && weatherData.current.humidity;
  const air = weatherData && weatherData.current.air_quality["us-epa-index"];
  const AQ = air !== null && AirQualityHelper(air);
  const HD = humidty !== null && HumidityHelper(humidty);

  if (initialLoad) {
    return <AirSkeleton />;
  }
  return (
    <div className="my-5">
      <section className="mb-2">
        {AQ && (
          <>
            <progress
              value={AQ.level}
              max="6"
              className="progress progress-success h-2 w-3/5"
            ></progress>
            <p className="font-bold text-pretty">{AQ.message}</p>
          </>
        )}
      </section>
      <section>
        {HD && (
          <>
            <progress
              value={HD.level}
              max="4"
              className="progress progress-warning h-2 w-3/5"
            ></progress>
            <p className="font-bold">{HD.message}</p>
            <p className="text-pretty">{HD.details}</p>
          </>
        )}
      </section>
    </div>
  );
};

export default AirQuality;

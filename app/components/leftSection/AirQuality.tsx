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
      <section className="mb-2" aria-label="Air Quality">
        {AQ && (
          <>
            <progress
              value={AQ.level}
              max="6"
              className="progress progress-success h-2 w-3/5"
              aria-valuenow={AQ.level}
              aria-valuemin={0}
              aria-valuemax={6}
              aria-label="Air quality level"
            ></progress>
            <p className="font-bold text-pretty" aria-live="polite">
              {AQ.message}
            </p>
          </>
        )}
      </section>

      <section aria-label="Humidity Details">
        {HD && (
          <>
            <progress
              value={HD.level}
              max="4"
              className="progress progress-warning h-2 w-3/5"
              aria-valuenow={HD.level}
              aria-valuemin={0}
              aria-valuemax={4}
              aria-label="Humidity level"
            ></progress>
            <p className="font-bold" aria-live="polite">
              {HD.message}
            </p>
            <p className="text-pretty">{HD.details}</p>
          </>
        )}
      </section>
    </div>
  );
};

export default AirQuality;

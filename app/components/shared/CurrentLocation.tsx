import React from "react";
import { GetDataWithGeoLocation } from "@/app/utilities/api.helper";

import { FaLocationCrosshairs } from "react-icons/fa6";
import useWeatherStore from "@/app/store/weatherStore";

const CurrentLocation = () => {
  const { setWeatherData } = useWeatherStore();
    const handleClick = async () => {
    let newData = await GetDataWithGeoLocation();
    setWeatherData(newData);
  };

  return (
    <div className="tooltip tooltip-bottom" data-tip="current location">
      <button onClick={handleClick}>
        <FaLocationCrosshairs className="text-2xl opacity-50 hover:opacity-90 mt-3" />
      </button>
    </div>
  );
};

export default CurrentLocation;

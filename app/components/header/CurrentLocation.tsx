import React from "react";
import { GetDataWithGeoLocation } from "@/app/utilities/api.helper";

import { FaLocationCrosshairs } from "react-icons/fa6";
import useWeatherStore from "@/app/store/weatherStore";
import { getLocation } from "@/app/utilities/location.helper";

const CurrentLocation = () => {
  const home = useWeatherStore((state) => state.home);
  const { setWeatherData } = useWeatherStore();

  const handleClick = async () => {
    if (home) {
      alert("you are already in your home");
    } else {
      setWeatherData("");
      let location = await getLocation();
      if ("latitude" in location && "longitude" in location) {
        let newData = await GetDataWithGeoLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
        setWeatherData(newData);
        
      }
    }
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

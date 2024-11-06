import React from "react";
import { GetDataWithGeoLocation } from "@/app/utilities/api.helper";

import { FaLocationCrosshairs } from "react-icons/fa6";
import useWeatherStore from "@/app/store/weatherStore";
import { getLocation } from "@/app/utilities/location.helper";
import toast from "react-hot-toast";

const CurrentLocation = () => {
  const home = useWeatherStore((state) => state.home);
  const { setWeatherData, setForecastData, setHome, setLoading } =
    useWeatherStore();

  const handleClick = async () => {
    if (home) {
      toast("You're already home!", {
        icon: "👏",
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      });
    } else {
      const location = await getLocation();
      setLoading(true);
      if ("latitude" in location && "longitude" in location) {
        const newData = await GetDataWithGeoLocation({
          latitude: location.latitude,
          longitude: location.longitude,
        });
        setWeatherData(newData.data);
        setForecastData(newData.forecast);
        setHome(true);
        setLoading(false);
      }
    }
  };

  return (
    <div className="tooltip tooltip-bottom" data-tip="current location">
      <button onClick={handleClick}>
        <FaLocationCrosshairs className="text-2xl 2xl:text-4xl opacity-50 hover:opacity-90 mt-7 xxs:mt-3 lg:mt-3 ml-5 xxs:ml-2 md:mr-2 xl:mr-5 xxs:mr-2 xxm:mr-7" />
      </button>
    </div>
  );
};

export default CurrentLocation;

import { GetDataWithGeoLocation } from "@/app/utilities/api.helper";
import React from "react";
import { FaLocationCrosshairs } from "react-icons/fa6";

const CurrentLocation = () => {
  const handleClick = async () => {
    // Check if Geolocation is supported by the browser
    if (navigator.geolocation) {
      // Geolocation is available
      navigator.geolocation.getCurrentPosition(
        (position: GeolocationPosition) => {
          // Get the coordinates of the current position
          const latitude: number = position.coords.latitude;
          const longitude: number = position.coords.longitude;
          GetDataWithGeoLocation(latitude, longitude)
        }
      );
    } else {
      // Geolocation is not supported by this browser
      console.log("Geolocation is not supported by this browser.");
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

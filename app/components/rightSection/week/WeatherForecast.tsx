import React from "react";
import Forecast from "./Forecast";

const WeatherForecast = () => {
  return (
    <>
      <div className="col-span-2">
        <Forecast dayNum={1} />
      </div>
      <div className="col-span-2">
        <Forecast dayNum={2} />
      </div>
      <div className="col-span-2">
        {/* <Forecast dayNum={3} /> */}
      </div>
      <div className="col-span-2">
        {/* <Forecast dayNum={4} /> */}
      </div>
      <div className="col-span-2">
        {/* <Forecast dayNum={5} /> */}
      </div>
      <div className="col-span-2">
        {/* <Forecast dayNum={6} /> */}
      </div>
    </>
  );
};

export default WeatherForecast;

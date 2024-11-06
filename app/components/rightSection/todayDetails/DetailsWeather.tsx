import React from "react";
import Condition from "./Condition";
import Moon from "./Moon";
import Wind from "./Wind";

const DetailsWeather = () => {
  return (
    <>
      <div className="col-span-4">
        <Condition />
      </div>
      <div className="col-span-4 xl:mx-3">
        <Moon />
      </div>
      <div className="col-span-4 ml-3 xl:mx-3">
        <Wind />
      </div>
    </>
  );
};

export default DetailsWeather;

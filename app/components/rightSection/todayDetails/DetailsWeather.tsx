import React from "react";
import Condition from "./Condition";
import Moon from "./Moon";
import Wind from "./Wind";

const DetailsWeather = () => {
  return (
    <>
      <div
        className="col-span-12 sm:col-span-4 lg:col-span-4"
        aria-labelledby="condition"
      >
        <Condition />
      </div>
      <div
        className="col-span-12 xxm:col-span-6 sm:col-span-4 lg:col-span-4 my-3 xl:mx-3 xxm:mr-1"
        aria-labelledby="moon"
      >
        <Moon />
      </div>
      <div
        className="col-span-12 xxm:col-span-6 sm:col-span-4 lg:col-span-4 lg:ml-3 xl:mx-3 xxm:my-3 xxm:ml-1"
        aria-labelledby="wind"
      >
        <Wind />
      </div>
    </>
  );
};

export default DetailsWeather;

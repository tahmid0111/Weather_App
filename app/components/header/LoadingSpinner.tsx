import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="absolute top-36 md:top-16 left-[45%] md:left-[40%] lg:left-[50%]">
      <span className="loading loading-spinner loading-lg 2xl:w-16 text-info"></span>
    </div>
  );
};

export default LoadingSpinner;

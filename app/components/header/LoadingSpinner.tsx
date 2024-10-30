import React from "react";

const LoadingSpinner = () => {
  return (
    <div className="absolute top-10 left-[50%]">
      <span className="loading loading-spinner loading-lg text-info"></span>
    </div>
  );
};

export default LoadingSpinner;

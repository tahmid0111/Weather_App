import React from "react";

const IconSkeleton = () => {
  return (
    <div className="mt-10 2xl:mt-20">
      <div className="skeleton h-32 md:h-40 2xl:h-44 w-32 md:w-40 2xl:w-44 mx-auto"></div>

      <div className="skeleton h-4 w-44 sm:w-56 mt-16 mb-5"></div>
      <div className="skeleton h-4 w-44 sm:w-56"></div>
    </div>
  );
};

export default IconSkeleton;

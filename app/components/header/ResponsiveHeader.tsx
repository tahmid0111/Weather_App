import Link from "next/link";
import React from "react";
import { FaAndroid } from "react-icons/fa6";
import CurrentLocation from "./CurrentLocation";
import SearchBox from "./SearchBox";

const ResponsiveHeader = () => {
  return (
<>
    <div className="flex">
      <div className="xxs:hidden mr-5">
        {/* Add accessible label for screen readers */}
        <CurrentLocation aria-label="Get current location" />
      </div>

      <Link href="/" aria-label="Go to home page">
        <div className="flex xxs:pl-20 my-5">
          <h1 className="text-3xl" role="banner">Weather AI</h1>
          <FaAndroid
            className="text-4xl ml-3 font-bold text-blue-500 pt-2"
            aria-hidden="true"
          />
        </div>
      </Link>
    </div>
    
    <div className="mx-2 flex">
      <div className="hidden xxs:block">
        {/* Accessible label on duplicate location icon */}
        <CurrentLocation aria-label="Get current location" />
      </div>
      <SearchBox aria-label="Search location" />
    </div>
  </>
  );
};

export default ResponsiveHeader;

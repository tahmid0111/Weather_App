"use client";
import React from "react";
import { FaAndroid } from "react-icons/fa6";
import CurrentLocation from "./CurrentLocation";
import SearchBox from "./SearchBox";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12">
      <div className="col-span-4">
        <Link href="/">
          <div className="flex pl-20 my-5">
            <h1 className="text-3xl">Weather AI</h1>
            <FaAndroid className="text-4xl ml-3 font-bold text-blue-500 pt-2" />
          </div>
        </Link>
      </div>
      <div className="col-span-8 bg-zinc-100">
        <div className="flex py-5 pr-20 float-end">
          <CurrentLocation />
          <SearchBox />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

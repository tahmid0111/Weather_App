"use client";
import useWeatherStore from "@/app/store/weatherStore";
import { GetDataWithCityName } from "@/app/utilities/api.helper";
import React, { useState } from "react";

const SearchBox = () => {
  const [myText, setMyText] = useState("");
  const { setWeatherData, setForecastData, setHome, setLoading } =
    useWeatherStore();
  const home = useWeatherStore((state) => state.home);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyText(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    e.preventDefault();
    const res = await GetDataWithCityName(myText);
    setWeatherData(res.data);
    setForecastData(res.forecast);
    setLoading(false);
    if (home) {
      setHome(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="location-search" className="sr-only">
        Search location
      </label>
      <input
        id="location-search"
        type="text"
        placeholder="search location"
        className="input 2xl:input-lg input-primary mr-2 lg:ml-7 xxm:pr-20 2xl:pr-28"
        value={myText}
        onChange={handleChange}
        aria-label="Search location"
      />
      <button
        type="submit"
        className="btn 2xl:btn-lg btn-primary"
        aria-label="Submit search"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBox;

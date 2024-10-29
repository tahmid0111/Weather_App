"use client";
import useWeatherStore from "@/app/store/weatherStore";
import { GetDataWithCityName } from "@/app/utilities/api.helper";
import React, { useState } from "react";

const SearchBox = () => {
  const [myText, setMyText] = useState("");
  const { setWeatherData } = useWeatherStore();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMyText(e.target.value);
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let res = await GetDataWithCityName(myText);
    setWeatherData(res);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="search location"
        className="input input-primary mr-2 ml-7 pr-20"
        value={myText}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default SearchBox;

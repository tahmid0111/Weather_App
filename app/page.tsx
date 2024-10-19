"use client";
import { useEffect } from "react";
import TodayWeather from "./components/leftSection/TodayWeather";
import DetailsWeather from "./components/rightSection/todayDetails/DetailsWeather";

import useWeatherStore from "@/app/store/weatherStore";
import { GetDataWithGeoLocation } from "./utilities/api.helper";
import WeatherForecast from "./components/rightSection/week/WeatherForecast";

export default function Home() {
  const { setWeatherData } = useWeatherStore();

  const getData = async () => {
    let newData = await GetDataWithGeoLocation();
    setWeatherData(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 px-10">
        <TodayWeather />
      </div>
      <div className="col-span-8 bg-zinc-100 px-10 py-10">
        <div className="grid grid-cols-12">
          <DetailsWeather />
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-12 my-10">
            <h1 className="font-bold border-b-2 border-blue-500 pb-2">Weather Forecast</h1>
          </div>
          <WeatherForecast />
        </div>
      </div>
    </div>
  );
}

"use client";
import { useEffect } from "react";
import Link from "next/link";

import TodayWeather from "./components/leftSection/TodayWeather";
import DetailsWeather from "./components/rightSection/todayDetails/DetailsWeather";
import CurrentLocation from "./components/header/CurrentLocation";
import SearchBox from "./components/header/SearchBox";
import WeatherForecast from "./components/rightSection/week/WeatherForecast";
import { getLocation } from "./utilities/location.helper";
import {
  GetDataWithCityName,
  GetDataWithGeoLocation,
} from "./utilities/api.helper";
import { FaAndroid } from "react-icons/fa6";

import useWeatherStore from "@/app/store/weatherStore";

export default function Home() {
  const { setWeatherData, setHome } = useWeatherStore();

  const getData = async () => {
    let newData;
    let location = await getLocation();
    if ("latitude" in location && "longitude" in location) {
      newData = await GetDataWithGeoLocation({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    } else {
      setHome(false);
      newData = await GetDataWithCityName("zurich");
    }
    setWeatherData(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-4 px-10">
        <Link href="/">
          <div className="flex pl-20 my-5">
            <h1 className="text-3xl">Weather AI</h1>
            <FaAndroid className="text-4xl ml-3 font-bold text-blue-500 pt-2" />
          </div>
        </Link>
        <TodayWeather />
      </div>

      <div className="col-span-8 bg-zinc-100 px-10 min-h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-12 mb-5">
            <div className="flex py-5 pr-20 float-end">
              <CurrentLocation />
              <SearchBox />
            </div>
          </div>
          <DetailsWeather />
          <div className="col-span-12 my-10">
            <h1 className="font-bold border-b-2 border-blue-500 pb-2">
              Weather Forecast
            </h1>
          </div>
          <WeatherForecast />
        </div>
      </div>
    </main>
  );
}

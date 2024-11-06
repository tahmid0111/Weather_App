"use client";
import { useEffect } from "react";
import Link from "next/link";

import TodayWeather from "./components/leftSection/TodayWeather";
import DetailsWeather from "./components/rightSection/todayDetails/DetailsWeather";
import CurrentLocation from "./components/header/CurrentLocation";
import SearchBox from "./components/header/SearchBox";
import WeatherForecast from "./components/rightSection/week/WeatherForecast";
import { GetDataWithCityName } from "./utilities/api.helper";
import { FaAndroid } from "react-icons/fa6";

import useWeatherStore from "@/app/store/weatherStore";
import LoadingSpinner from "./components/header/LoadingSpinner";
import ResponsiveHeader from "./components/header/ResponsiveHeader";

export default function Home() {
  const { setWeatherData, setForecastData, setInitialLoad } = useWeatherStore();
  const loading = useWeatherStore((state) => state.loading);

  const getData = async () => {
    const newData = await GetDataWithCityName("zurich");
    setWeatherData(newData.data);
    setForecastData(newData.forecast);
    setInitialLoad(false);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <main className="grid grid-cols-12">
      <div className="col-span-12">{loading && <LoadingSpinner />}</div>
      <div className="col-span-12 md:hidden mx-auto">
        <ResponsiveHeader />
      </div>
      <div className="col-span-4 px-5 xl:px-10 hidden md:block">
        <Link href="/">
          <div className="flex lg:pl-10 xl:pl-20 my-5">
            <h1 className="text-3xl 2xl:text-4xl">Weather AI</h1>
            <FaAndroid className="text-4xl 2xl:text-5xl ml-3 font-bold text-blue-500 pt-1" />
          </div>
        </Link>
      </div>
      <div className="col-span-8 lg:bg-zinc-100 px-5 xl:px-10 hidden md:block">
        <div className="flex py-5 lg:pr-10 xl:pr-20 float-end">
          <CurrentLocation />
          <SearchBox />
        </div>
      </div>
      <div className="col-span-12 lg:col-span-4 px-3 sm:px-5 xl:px-10">
        <TodayWeather />
      </div>

      <div className="col-span-8 bg-zinc-100 px-5 xl:px-10 min-h-screen hidden md:block">
        <div className="grid grid-cols-12">
          <DetailsWeather />
          <div className="col-span-12 mt-10 xl:mt-20 mb-10">
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

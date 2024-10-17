'use client';
import { useEffect } from "react";
import TodayWeather from "./components/leftSection/TodayWeather";
import useWeatherStore from "@/app/store/weatherStore";
import { GetDataWithGeoLocation } from "./utilities/api.helper";

export default function Home() {
  const { weatherData, setWeatherData } = useWeatherStore();

  const getData = async () => {
    let newData = await GetDataWithGeoLocation();
    setWeatherData(newData);
    
  }

  useEffect(() => {
    getData()
  }, []);
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4">
        <TodayWeather />
      </div>
      <div className="col-span-8 bg-zinc-100">

      </div>
    </div>
  );
}

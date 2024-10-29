import axios from "axios";
import { getLocation } from "./location.helper";

export const GetDataWithGeoLocation = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  let location = await getLocation();
  if ("status" in location) {
    console.error("Failed to get location");
  } else {
    let url: string = `https://api.weatherapi.com/v1/forecast.json?key=4a6279bf1fae453bbe243144241610&q=${latitude},${longitude}&days=7&aqi=yes&alerts=no`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    };

    let res = await axios.get(url, options);
    let data = res.data;

    let url2: string = "https://restcountries.com/v3.1/all?fields=capital,capitalInfo";
    let res2 = await axios.get(url2, options);
    let data2 = res2.data;
    return data;
  }
};

export const GetDataWithCityName = async (cityName: string) => {
  let url: string = `https://api.weatherapi.com/v1/forecast.json?key=4a6279bf1fae453bbe243144241610&q=${cityName}&days=7&aqi=yes&alerts=no`;
  let options = {
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  };
  let res = await axios.get(url, options);
  let data = res.data;
  return data;
};

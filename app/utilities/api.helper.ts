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
    let url: string = `https://api.weatherapi.com/v1/forecast.json?key=26ae320be6f34ce08ff50522240411&q=${latitude},${longitude}&days=7&aqi=yes&alerts=no`;
    let options = {
      headers: {
        "Content-Type": "application/json",
        // "Access-Control-Allow-Origin": "*",
      },
    };

    let res = await axios.get(url, options);
    let data = res.data;
    console.log(data);

    // let url2: string = "https://restcountries.com/v3.1/all?fields=capital,capitalInfo";
    // let res2 = await axios.get(url2, options);
    // let data2 = res2.data;
    return data;
  }
};

export const GetDataWithCityName = async (cityName: string) => {
  let url: string = `https://api.weatherapi.com/v1/forecast.json?key=26ae320be6f34ce08ff50522240411&q=${cityName}&aqi=yes&alerts=no`;
  let options = {
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  };
  let res = await axios.get(url, options);
  let data = res.data;

  let url2: string = `https://api.open-meteo.com/v1/forecast?latitude=${data.location.lat}&longitude=${data.location.lon}&daily=temperature_2m_max,temperature_2m_min`;
  let res2 = await axios.get(url2, options);
  let data2 = res2.data;
  // console.log(data)
  return { data: data, forecast: data2 };
};

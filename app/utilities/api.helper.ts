import axios from "axios";
import { getLocation } from "./location.helper";

export const GetDataWithGeoLocation = async () => {
  let location = await getLocation();
  if ("status" in location) {
    console.error("Failed to get location");
  } else {
    let url: string = `https://api.weatherapi.com/v1/forecast.json?key=4a6279bf1fae453bbe243144241610&q=${location.latitude},${location.longitude}&days=7&aqi=no&alerts=no`;
    let options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    let res = await axios.get(url, options);
    let data = res.data;
    // console.log(data.location.name, data.location.country);

    let url2: string = "https://restcountries.com/v3.1/all";
    return data;
  }
};

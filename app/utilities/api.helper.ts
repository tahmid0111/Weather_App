import axios from "axios";

export const GetDataWithGeoLocation = async ({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) => {
  try {
    const url: string = `https://api.weatherapi.com/v1/forecast.json?key=26ae320be6f34ce08ff50522240411&q=${latitude},${longitude}&days=7&aqi=yes&alerts=no`;
    const url2: string = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=temperature_2m_max,temperature_2m_min`;
    const options = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const res = await axios.get(url, options);
    const res2 = await axios.get(url2, options);
    const data = res.data;
    const data2 = res2.data;

    return { data: data, forecast: data2 };
  } catch (error) {
    console.error("Error fetching data with geolocation:", error);
    return { data: null, forecast: null };
  }

  // let url2: string = "https://restcountries.com/v3.1/all?fields=capital,capitalInfo";
  // let res2 = await axios.get(url2, options);
  // let data2 = res2.data;
};

export const GetDataWithCityName = async (cityName: string) => {
  const url: string = `https://api.weatherapi.com/v1/forecast.json?key=26ae320be6f34ce08ff50522240411&q=${cityName}&aqi=yes&alerts=no`;
  const options = {
    headers: {
      "Content-Type": "application/json",
      // "Access-Control-Allow-Origin": "*",
    },
  };
  const res = await axios.get(url, options);
  const data = res.data;

  const url2: string = `https://api.open-meteo.com/v1/forecast?latitude=${data.location.lat}&longitude=${data.location.lon}&daily=temperature_2m_max,temperature_2m_min`;
  const res2 = await axios.get(url2, options);
  const data2 = res2.data;
  // console.log(data)
  return { data: data, forecast: data2 };
};

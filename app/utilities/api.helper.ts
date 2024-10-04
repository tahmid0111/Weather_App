import axios from "axios";
import { CgCalendarDates } from "react-icons/cg";

let urlWithCityName: string = `https://api.openweathermap.org/data/2.5/forecast?q=pune&appid=809b21e9411b863de6ad0b0843c97213&cnt=56`;

// `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}&cnt=56`
// async function getTodaysWeather(place) {
//     const apiKey = process.env.NEXT_PUBLIC_WEATHER_KEY;
//     const url = `https://api.openweathermap.org/data/2.5/forecast?q=${place}&appid=${apiKey}&cnt=8`;

//     try {
//       const response = await fetch(url);
//       const data = await response.json();

//       const currentWeather = data.list.find(item => {
//         // Convert API time to a suitable format and compare to current time
//         const forecastTime = new Date(item.dt * 1000);

//         const currentTime = new Date();
//         return forecastTime.getDate() === currentTime.getDate();
//       });

//       if (currentWeather) {
//         // Extract and display weather information
//         const temperature = currentWeather.main.temp;
//         const humidity = currentWeather.main.humidity;
//         const windSpeed = currentWeather.wind.speed;
//         // ... other weather data

//         console.log(`Today's weather in ${place}:`);
//         console.log(`Temperature: ${temperature} K`);
//         console.log(`Humidity: ${humidity}%`);
//         console.log(`Wind Speed: ${windSpeed} m/s`);
//       } else {
//         console.error("No weather data found for today.");
//       }
//     } catch (error) {
//       console.error("Error fetching weather data:", error);
//     }
//   }

export const GetDataWithGeoLocation = async (
  latitude: number,
  longitude: number
) => {
  let url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=809b21e9411b863de6ad0b0843c97213`;

  let res = await axios.get(url);
  console.log(res.data)
};

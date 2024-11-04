import { create } from "zustand";

interface WeatherStore {
  weatherData: any;
  forecastData: any,
  home: boolean;
  // fetchWeatherData: () => any;
  setWeatherData: (data: any) => void;
  setForecastData: (data: any) => void;
  setHome: (data: boolean) => void;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  forecastData: null,
  home: true,
  // fetchWeatherData: async () => {
  //   try {
  //     const response = await GetDataWithGeoLocation(47.5, 19.08);
  //     set({ weatherData: response });
  //   } catch (error) {
  //     console.error("Error fetching weather data:", error);
  //   }
  // },
  setWeatherData: (data: any) => {
    set({ weatherData: data });
  },
  setForecastData: (data: any) => {
    set({ forecastData: data });
  },
  setHome: (data: boolean) => {
    set({ home: data });
  },
}));

export default useWeatherStore;

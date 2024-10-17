import { create } from "zustand";

interface WeatherStore {
  weatherData: any;
  // fetchWeatherData: () => any;
  setWeatherData: (data: any) => void;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
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
}));

export default useWeatherStore;

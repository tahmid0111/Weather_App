import { create } from "zustand";

interface WeatherStore {
  weatherData: any;
  forecastData: any,
  home: boolean;
  loading: boolean;
  setWeatherData: (data: any) => void;
  setForecastData: (data: any) => void;
  setHome: (data: boolean) => void;
  setLoading: (data: boolean) => void;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  forecastData: null,
  home: false,
  loading: false,

  setWeatherData: (data: any) => {
    set({ weatherData: data });
  },
  setForecastData: (data: any) => {
    set({ forecastData: data });
  },
  setHome: (data: boolean) => {
    set({ home: data });
  },
  setLoading: (data: boolean) => {
    set({ loading: data });
  },
}));

export default useWeatherStore;

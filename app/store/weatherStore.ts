import { create } from "zustand";

interface WeatherStore {
  weatherData: any;
  forecastData: any,
  home: boolean;
  loading: boolean;
  initialLoad: boolean;
  setWeatherData: (data: any) => void;
  setForecastData: (data: any) => void;
  setHome: (data: boolean) => void;
  setLoading: (data: boolean) => void;
  setInitialLoad: (data: boolean) => void;
}

const useWeatherStore = create<WeatherStore>((set) => ({
  weatherData: null,
  forecastData: null,
  home: false,
  loading: false,
  initialLoad: true,

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
  setInitialLoad: (data: boolean) => {
    set({ initialLoad: data });
  },
}));

export default useWeatherStore;
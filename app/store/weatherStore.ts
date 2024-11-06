import { create } from "zustand";

interface WeatherStore {
  weatherData: object | null;
  forecastData: object | null,
  home: boolean;
  loading: boolean;
  initialLoad: boolean;
  setWeatherData: (data: object | null) => void;
  setForecastData: (data: object | null) => void;
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

  setWeatherData: (data: object | null) => {
    set({ weatherData: data });
  },
  setForecastData: (data: object | null) => {
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

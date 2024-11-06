import { create } from "zustand";
import { ForecastData, WeatherData } from "../utilities/interface.helper";

interface WeatherStore {
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  home: boolean;
  loading: boolean;
  initialLoad: boolean;
  setWeatherData: (data: WeatherData | null) => void;
  setForecastData: (data: ForecastData | null) => void;
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

  setWeatherData: (data: WeatherData | null) => {
    set({ weatherData: data });
  },
  setForecastData: (data: ForecastData | null) => {
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

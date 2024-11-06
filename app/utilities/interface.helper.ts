// WeatherData Interface
export interface WeatherData {
    current: {
      humidity: number;
      air_quality: {
        "us-epa-index": number;
      };
      condition: {
        icon: string;
        text: string;
      };
      wind_kph: number;
      wind_dir: string;
      vis_km: number;
    };
    forecast: {
      forecastday: Array<{
        date_epoch: number;
        day: {
          avgtemp_c: number;
          condition: {
            text: string;
          };
        };
        astro: {
          sunrise: string;
          sunset: string;
          moon_phase: string;
          moonrise: string;
          moonset: string;
        };
      }>;
    };
    location: {
      name: string;
      country: string;
    };
  }
  
  // ForecastData Interface
  export interface ForecastData {
    daily: {
      time: { [key: string]: string };
      temperature_2m_max: { [key: string]: number };
      temperature_2m_min: { [key: string]: number };
    };
  }
  
  // Combined WeatherProps Interface
  export interface WeatherProps {
    humidity: number;
    air: number;
    conditionIcon: string;
    conditionText: string;
    avgTemp: number;
    today: string;
    sunrise: string;
    sunset: string;
    conditionDay: string;
    location: string;
    moonPhase: string;
    moonrise: string;
    moonset: string;
    windKph: number;
    windDir: string;
    visibility: number;
    myDate: string;
    maxTempC: number;
    minTempC: number;
    temp: number;
  }
  
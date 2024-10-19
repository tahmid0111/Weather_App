type AirQualityResponse = {
  message: string;
  level: number;
};
type HumidityQualityResponse = {
  message: string;
  details: string;
  level: number;
};
export const AirQualityHelper = (air: number): AirQualityResponse => {
  if (air === 1) {
    return { message: "Very Good Air Quality", level: 6 };
  }
  if (air === 2) {
    return { message: "Good Air Quality", level: 5 };
  }
  if (air === 3) {
    return {
      message: "Good Air Quality ( Unhealthy for sensitive groups )",
      level: 4,
    };
  }
  if (air === 4) {
    return { message: "Unhealthy Air Quality", level: 3 };
  }
  if (air === 5) {
    return { message: "Very unhealthy Air Quality", level: 2 };
  }
  if (air === 6) {
    return { message: "Hazardous Air Quality", level: 1 };
  } else {
    return { message: "", level: 6 };
  }
};

export const HumidityHelper = (humidty: number): HumidityQualityResponse => {
  if (humidty >= 0 && humidty <= 30) {
    return {
      message: "Low humidity",
      details:
        "feels dry and can cause health and environmental issues, particularly dehydration and respiratory problems.",
      level: 1,
    };
  }
  if (humidty > 30 && humidty <= 50) {
    return {
      message: "Moderate humidity",
      details:
        "is ideal for comfort and health, with minimal negative impacts.",
      level: 2,
    };
  }
  if (humidty > 50 && humidty <= 70) {
    return {
      message: "High humidity",
      details:
        "can feel uncomfortable, and it increases the likelihood of mold, condensation, and heat-related stress.",
      level: 3,
    };
  }
  if (humidty > 70 && humidty <= 100) {
    return {
      message: "Very high humidity",
      details:
        "is oppressive, often leading to discomfort, potential health risks, and environmental damage, with frequent rain or fog.",
      level: 4,
    };
  } else {
    return {
      message: "",
      details: "",
      level: 4,
    };
  }
};

type myLocation = {
  latitude: number;
  longitude: number;
};

export const getLocation = async (): Promise<
  myLocation | { status: "notSupported" | "fail" }
> => {
  try {
    if (!navigator.geolocation) {
      return { status: "notSupported" };
    }
    return await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;
          resolve({ latitude, longitude });
        },
        (error) => {
          reject(`Error getting location: ${error.message}`);
        }
      );
    });
  } catch (error) {
    console.log(error)
    return { status: "fail" };
  }
};

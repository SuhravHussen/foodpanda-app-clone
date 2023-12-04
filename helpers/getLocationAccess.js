import * as Location from "expo-location";

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});

  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${location.coords.latitude}+${location.coords.longitude}&key=f253949d22b14328b407d5b5c87636d1`
  );

  const data = await res.json();

  const address = {
    city: data.results[0].components.city,
    country: data.results[0].components.country,
    formatted: data.results[0].formatted,
  };

  return {
    location,
    address,
  };
};

export default getLocation;

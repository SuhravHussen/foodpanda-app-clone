import * as Location from "expo-location";
// @ts-ignore
import { GEOCODE_API } from "@env";

const getLocation = async () => {
  let { status } = await Location.requestForegroundPermissionsAsync();
  if (status !== "granted") {
    alert("Permission to access location was denied");
    return;
  }

  let location = await Location.getCurrentPositionAsync({});

  const res = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${location.coords.latitude}+${location.coords.longitude}&key=${GEOCODE_API}`
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

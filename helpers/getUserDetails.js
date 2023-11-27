import AsyncStorage from "@react-native-async-storage/async-storage";

const getUserDetails = async () => {
  const value = await AsyncStorage.getItem("userDetails");

  return value;
};

export default getUserDetails;

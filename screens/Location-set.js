import { View, Text, Image } from "react-native";
import React from "react";
// @ts-ignore
const setLocationImage = require("../assets/images/set-location.jpg");
import styles from "../styles/location-set/location-set-styles";

import { Button } from "@rneui/themed";
import getLocation from "../helpers/getLocationAccess";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function SetLocation({ navigation }) {
  const handleLocationAccess = async () => {
    // @ts-ignore
    let { address } = await getLocation();
    await AsyncStorage.setItem(
      "userDetails",
      JSON.stringify({
        address,
      })
    );
    // @ts-ignore
    navigation.navigate("Root");
  };

  return (
    <View style={styles.setLocationContainer}>
      <View style={styles.imageContainer}>
        <Image source={setLocationImage} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textBig}>Find restaurants and shops near you!</Text>
        <Text
          style={{
            textAlign: "center",
          }}
        >
          By allowing location access, you can search for restaurants and shops
          near you and receive more accurate delivery
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Share my current location"
          onPress={handleLocationAccess}
        />
        <Button
          title="Enter address manually"
          type="outline"
          onPress={() => navigation.navigate("map-view")}
        />
      </View>
    </View>
  );
}

import React, { useState } from "react";
import { useEffect } from "react";
import { Image, View } from "react-native";
import MapView from "react-native-maps";
import { Button } from "@rneui/themed";
import AlertDialog from "../components/Mapview/Dialog";
import { useNavigation } from "@react-navigation/native";
import styles from "../styles/map-view/map-view-styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AllSuggestions from "../components/Mapview/AllSuggestions";
// @ts-ignore
const markerImage = require("../assets/icons8-marker.png");

const Mapview = ({ route }) => {
  const latitudeDelta = 3.201573199999997;
  const longitudeDelta = 3.653338899999993;

  const [region, setRegion] = useState({
    latitudeDelta: latitudeDelta,
    longitudeDelta: longitudeDelta,
    latitude: 23.744617,
    longitude: 90.436736,
  });
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const { suggestions, userLat, userLong } = route.params;
  const navigation = useNavigation();

  const handleRegionChange = (newRegion) => {
    setRegion(newRegion);
  };

  /**  
   This is for if the user clicks on auto location track in search bar, so that the map view can move to according to auto location detect
  */

  useEffect(() => {
    if (userLat && userLong) {
      setRegion({
        latitudeDelta: 0.027780169330707594,
        longitudeDelta: 0.016355104744434357,
        latitude: userLat,
        longitude: userLong,
      });
    }
  }, [userLat, userLong]);

  /**
   * save user given location
   */

  const confirmLocation = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${region.latitude}+${region.longitude}&key=f253949d22b14328b407d5b5c87636d1`
      );

      const data = await res.json();

      const address = {
        city: data.results[0].components.city,
        country: data.results[0].components.country,
        formatted: data.results[0].formatted,
      };

      if (address.country !== "Bangladesh") {
        setDialogOpen(true);
        return;
      }
      await AsyncStorage.setItem(
        "userDetails",
        JSON.stringify({
          address,
        })
      );
      // @ts-ignore
      navigation.navigate("Root");
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  /**
   * changes the map view location if user clicks
     in any suggested location

   * takes an object as argument { lat: number , long: number} 
   */
  const handleSuggestionClick = (s) => {
    setRegion({
      latitudeDelta: 0.027780169330707594,
      longitudeDelta: 0.016355104744434357,
      latitude: s.lat,
      longitude: s.long,
    });
    // @ts-ignore
    navigation.setParams({
      suggestions: [],
    });
  };

  return (
    <>
      <AlertDialog setDialogOpen={setDialogOpen} dialogOpen={dialogOpen} />
      <View style={styles.map}>
        <MapView
          style={styles.map}
          initialRegion={region}
          onRegionChangeComplete={handleRegionChange}
          region={region}
        />
        <View style={styles.markerFixed}>
          <Image source={markerImage} style={styles.marker} />
        </View>

        <View
          style={{
            position: "absolute",
            width: "90%",
            bottom: 15,
            alignSelf: "center",
          }}
        >
          <Button
            title="Confirm"
            onPress={confirmLocation}
            loading={loading}
            size="lg"
            style={{
              width: "30%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            radius={6}
          />
        </View>
      </View>
      {suggestions.length > 1 && (
        <AllSuggestions
          suggestions={suggestions}
          handleSuggestionClick={handleSuggestionClick}
        />
      )}
    </>
  );
};

export default Mapview;

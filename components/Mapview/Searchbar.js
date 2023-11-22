import { View, Pressable } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { SearchBar } from "@rneui/themed";
import { useState } from "react";
import useTransition from "../../lib/custom-hooks/debounce";
import { useNavigation } from "@react-navigation/native";
// @ts-ignore
import { GEOAPIFY_AUTOCOMPLETE_API } from "@env";

import getLocation from "../../helpers/getLocationAccess";
import styles from "../../styles/map-view/searchbar-styles";

export default function Searchbar() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, startTransition] = useTransition();
  const navigation = useNavigation();

  const handleSearch = (text) => {
    setSearchValue(text);
    // @ts-ignore
    startTransition(async () => {
      try {
        const res = await fetch(
          `https://api.geoapify.com/v1/geocode/autocomplete?text=${text}&format=json&apiKey=${GEOAPIFY_AUTOCOMPLETE_API}&bias=countrycode:bd`
        );
        const data = await res.json();
        const suggestions = data.results?.map((location) => {
          return {
            lat: location.lat,
            long: location.lon,
            address: location.formatted,
          };
        });

        // @ts-ignore
        navigation.setParams({
          suggestions: suggestions && suggestions.length > 0 ? suggestions : [],
        });
      } catch (e) {
        console.log(e);
      }
    });
  };

  const handleUserGpsLocation = async () => {
    // @ts-ignore
    const { location } = await getLocation();
    // @ts-ignore
    navigation.setParams({
      suggestions: [],
      userLat: location.coords.latitude,
      userLong: location.coords.longitude,
    });
    // @ts-ignore
  };

  return (
    <>
      <View style={styles.headerTitleContainer}>
        <SearchBar
          placeholder="Select location"
          searchIcon={false}
          value={searchValue}
          onChangeText={(t) => handleSearch(t)}
          containerStyle={styles.searchBarContainer}
          inputContainerStyle={styles.searchBarInputContainerStyle}
          inputStyle={styles.searchBarInputStyle}
          placeholderTextColor="black"
          clearIcon={false}
        />

        <Pressable style={styles.gpsIconStyle} onPress={handleUserGpsLocation}>
          <MaterialIcons name="gps-fixed" size={19} color="red" />
        </Pressable>
      </View>
    </>
  );
}

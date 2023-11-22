import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./Root";
import SetLocation from "./screens/Location-set";
import Mapview from "./screens/Map-view";
import Searchbar from "./components/Mapview/Searchbar";

export default function Stack({ locationAvailable }) {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={locationAvailable ? "Location" : "Location"}
      >
        <Stack.Screen
          name="Root"
          component={Root}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Location"
          component={SetLocation}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="map-view"
          initialParams={{
            suggestions: [],
            userLat: null,
            userLong: null,
          }}
          component={Mapview}
          options={{
            title: "",
            headerTitleContainerStyle: {
              width: "100%",
            },

            headerTitle: () => <Searchbar />,
            headerTintColor: "#D80466",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

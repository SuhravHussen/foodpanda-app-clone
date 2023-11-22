import { createDrawerNavigator } from "@react-navigation/drawer";
import React from "react";
import Home from "./screens/Home";
import Profile from "./screens/Profile";

function Root() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Profile" component={Profile} />
    </Drawer.Navigator>
  );
}

export default Root;

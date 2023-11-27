import {
  DrawerItemList,
  createDrawerNavigator,
} from "@react-navigation/drawer";
import React from "react";
import Home from "./screens/Root/Home";
import Profile from "./screens/Profile";
import { SafeAreaView } from "react-native-safe-area-context";
import { View } from "react-native";
import { Button, Divider } from "@rneui/themed";
import { AntDesign, FontAwesome5, Feather } from "@expo/vector-icons";

import { theme } from "./theme";
import Helpenter from "./screens/Root/Help-center";
import ForBusiness from "./screens/Root/For-business";
import Invite from "./screens/Root/Invite";
import Title from "./components/Root/Header/Title";
import CartIcon from "./components/Root/Header/CartIcon";
function Root() {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        drawerActiveTintColor: "black",
        drawerActiveBackgroundColor: "transparent",
        drawerInactiveTintColor: "black",
        drawerInactiveBackgroundColor: "transparent",
        headerTintColor: "#fff",
        headerTitle: () => <Title />,
        headerRight: () => <CartIcon />,
        headerStyle: {
          backgroundColor: theme.lightColors?.primary,
        },

        drawerItemStyle: {
          // backgroundColor: "red",
          width: "100%",
          marginLeft: 0,
          borderRadius: 0,
        },
        drawerLabelStyle: {
          fontWeight: "400",
        },
      }}
      drawerContent={(props) => {
        return (
          <SafeAreaView style={{ flex: 1 }}>
            <View
              style={{
                backgroundColor: "#D80466",
                height: "30%",
                justifyContent: "flex-end",
                width: "100%",
              }}
            >
              <Button
                title="Log in / Create account"
                titleStyle={{
                  width: "100%",
                  textAlign: "left",
                  paddingVertical: 10,

                  marginLeft: 5,
                }}
                containerStyle={{
                  alignItems: "flex-start",

                  // width: "100%",
                }}
              />
            </View>
            <DrawerItemList {...props} />

            <Divider />

            <View>
              <Button
                title="Settings"
                radius={0}
                titleProps={{
                  style: {
                    fontWeight: "400",
                    width: "100%",
                    textAlign: "left",
                    paddingVertical: 10,
                    // fontSize: 16,
                    color: "black",

                    marginLeft: 5,
                  },
                }}
                type="clear"
              />
              <Button
                title="Terms & Conditions / Privacy"
                radius={0}
                titleProps={{
                  style: {
                    fontWeight: "400",
                    width: "100%",
                    textAlign: "left",
                    paddingVertical: 10,
                    // fontSize: 16,
                    color: "black",

                    marginLeft: 5,
                  },
                }}
                type="clear"
              />
            </View>
          </SafeAreaView>
        );
      }}
    >
      <Drawer.Screen
        name="Help Center"
        component={Helpenter}
        options={{
          drawerIcon: () => (
            <AntDesign
              name="questioncircleo"
              size={19}
              color={theme.lightColors?.primary}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Foodpanda for business"
        component={ForBusiness}
        options={{
          drawerIcon: () => (
            <FontAwesome5
              name="building"
              size={19}
              color={theme.lightColors?.primary}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Invite friends"
        component={Invite}
        options={{
          drawerIcon: () => (
            <Feather
              name="gift"
              size={20}
              color={theme.lightColors?.primary}
              style={{ marginLeft: 10 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerItemStyle: {
            display: "none",
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default Root;

import { View, Text } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { theme } from "../../../theme";
export default function CartIcon() {
  return (
    <View
      style={{
        position: "relative",
        marginRight: 20,
      }}
    >
      <Feather
        name="shopping-bag"
        size={23}
        color={theme.lightColors?.background}
      />
      <Text
        style={{
          position: "absolute",
          color: theme.lightColors?.primary,
          backgroundColor: theme.lightColors?.background,
          height: 15,
          width: 15,
          textAlign: "center",
          fontSize: 10,
          fontWeight: "bold",
          borderRadius: 10,
          bottom: -3,
          right: -3,
        }}
      >
        1
      </Text>
    </View>
  );
}

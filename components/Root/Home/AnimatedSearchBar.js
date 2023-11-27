import { View, Text } from "react-native";
import React from "react";
import { theme } from "../../../theme";
import { AntDesign } from "@expo/vector-icons";

export default function AnimatedSearchBar({ topValue }) {
  return (
    <View
      style={{
        zIndex: 0,
        height: 65,
        position: "absolute",
        top: topValue,
        flex: 1,
        width: "100%",
        backgroundColor: theme.lightColors?.primary,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
        paddingBottom: 15,
      }}
    >
      <View
        style={{
          backgroundColor: theme.lightColors?.background,
          padding: 10,
          width: "93%",
          borderRadius: 20,
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <AntDesign name="search1" size={24} color="grey" />
        <Text style={{ color: "grey" }}>Search for shops & restaurants</Text>
      </View>
    </View>
  );
}

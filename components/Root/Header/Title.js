// @ts-nocheck
import { View, Text } from "react-native";
import React from "react";
import { useState } from "react";
import { useLayoutEffect } from "react";
import getUserDetails from "../../../helpers/getUserDetails";
import { theme } from "../../../theme";

export default function Title() {
  const [userDetails, setUserDetails] = useState({});

  useLayoutEffect(() => {
    getUserDetails().then((val) => {
      val = JSON.parse(val);
      setUserDetails(val);
    });
  });

  return (
    <View
      style={{
        width: "105%",
      }}
    >
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{
          color: theme.lightColors.background,
          fontWeight: "bold",
          fontSize: 16,
        }}
      >
        {userDetails?.address?.formatted}
      </Text>
      <Text
        style={{
          color: theme.lightColors.background,
        }}
      >
        {userDetails?.address?.city}
      </Text>
    </View>
  );
}

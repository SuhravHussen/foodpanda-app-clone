// @ts-nocheck
import { View, Text, Image } from "react-native";
import React from "react";

const becomeProPanda = require("../../../../assets/images/becomePro.png");

export default function BecomeProp() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
      }}
    >
      <View
        style={{
          width: "90%",
          borderWidth: 1,
          borderColor: "lightgrey",
          padding: 15,
          borderRadius: 10,
          flexDirection: "row",
          height: 80,
          alignItems: "center",
          gap: 20,
        }}
      >
        <View
          style={{
            gap: 5,
            width: "60%",
          }}
        >
          <Text
            style={{
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Become a pro
          </Text>
          <Text
            style={{
              fontSize: 14,
            }}
          >
            Unlock Exclusive perks!
          </Text>
        </View>

        <View
          style={{
            width: "40%",
          }}
        >
          <Image
            source={becomeProPanda}
            style={{
              height: "110%",
              width: "100%",
              resizeMode: "center",
            }}
          />
        </View>
      </View>
    </View>
  );
}

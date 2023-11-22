import { View, Text, Button } from "react-native";
import React from "react";

export default function Home({ navigation }) {
  return (
    <View>
      <Text>Home</Text>
      <Button title="Go to feed" onPress={() => navigation.navigate("Feed")} />
    </View>
  );
}

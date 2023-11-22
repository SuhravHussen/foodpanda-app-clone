import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import React from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function AllSuggestions({ suggestions, handleSuggestionClick }) {
  const { width } = useWindowDimensions();

  return (
    <View
      style={{
        position: "absolute",
        backgroundColor: "#fff",
        width: width,
      }}
    >
      {suggestions.map((s) => (
        <Pressable
          onPress={() => handleSuggestionClick(s)}
          key={s.address}
          style={styles.suggestion}
        >
          <EvilIcons name="location" size={15} color="#D80466" />
          <Text>{s.address}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  suggestion: {
    padding: 10,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});

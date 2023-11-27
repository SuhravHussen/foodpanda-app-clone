import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { theme } from "../../../../theme";

export default function Hero() {
  return (
    <View style={styles.container}>
      {/* flex col  one*/}
      <View style={styles.col}>
        <View style={[styles.item, styles.item1]}>
          <Text>Food Delivery</Text>
        </View>
        <View style={[styles.item, styles.item2]}>
          <Text>Dine in</Text>
        </View>
      </View>

      {/* flex col two*/}
      <View style={styles.col}>
        <View style={[styles.item, styles.item3]}>
          <Text>Shops</Text>
        </View>
        <View style={[styles.item, styles.item4]}>
          <Text>Pick up</Text>
        </View>
        <View style={[styles.item, styles.item5]}>
          <Text>Pandago</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 65,
    height: 335,
    backgroundColor: "#F5F5F5",
    padding: 22,
    gap: 10,
    flex: 1,
    justifyContent: "center",
  },
  col: {
    width: "50%",
    gap: 10,
  },
  item: {
    backgroundColor: theme.lightColors?.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DEDEDE",
  },
  item1: {
    height: "70%",
  },
  item2: {
    height: "30%",
  },
  item3: {
    height: "45%",
  },
  item4: {
    height: "21%",
  },
  item5: {
    height: "30%",
  },
});

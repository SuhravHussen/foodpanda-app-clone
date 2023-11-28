import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginTop: 65,
    height: 350,
    backgroundColor: "#F5F5F5",
    padding: 22,
    gap: 10,
    flex: 1,
    justifyContent: "center",
  },
  col: {
    width: "50%",
    gap: 10,
    position: "relative",
  },
  item: {
    backgroundColor: theme.lightColors?.background,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DEDEDE",
    padding: 10,
    gap: 3,
    overflow: "hidden",
  },
  item1: {
    height: "75%",
  },
  item2: {
    height: "25%",
    flexDirection: "row",
  },
  item2Col1: {
    width: "60%",
  },
  item2Col2: {
    width: "40%",
  },
  item3: {
    height: "50%",
  },
  item4: {
    height: "22%",
    flexDirection: "row",
  },
  item4col1: {
    width: "60%",
    justifyContent: "center",
  },
  item4col2: {
    width: "40%",
  },
  item5: {
    height: "25%",
    flexDirection: "row",
  },
  item5Col1: { width: "60%" },
  item5Col2: { width: "40%" },
  itemHeader: {
    fontWeight: "bold",
    fontSize: 18,
  },

  itemText: {
    fontWeight: "400",
    fontSize: 12,
  },
  itemOneImage: {
    height: "60%",
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
    position: "absolute",
    bottom: 0,
  },
  itemTwoImage: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: -10,
  },
  itemThreeImage: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    alignSelf: "center",
    position: "absolute",
    bottom: -25,
    right: -2,
  },
  itemFourImage: {
    height: "130%",
    width: "130%",
    position: "absolute",
    right: -13,
    resizeMode: "center",
    bottom: 0,
  },
  itemFiveImage: {
    height: "120%",
    width: "120%",
    position: "absolute",
    right: -7,
    resizeMode: "center",
    bottom: -8,
  },
});

export default styles;

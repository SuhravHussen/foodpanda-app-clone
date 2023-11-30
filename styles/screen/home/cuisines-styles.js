import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  cuisineContainer: {
    backgroundColor: theme.lightColors?.background,
  },
  heading: {
    padding: 15,
    paddingTop: 10,
    fontWeight: "bold",
    fontSize: 18,
  },
  allCuisineContainer: {
    height: 220,
  },
  singleCuisineContainer: {
    width: 70,
    height: 100,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  imageView: {
    height: 70,
    width: "100%",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    resizeMode: "contain",
    height: "103%",
    width: "100%",
    backgroundColor: "#FFFAFAFA",
  },
  title: {
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    fontSize: 12,
    marginTop: 10,
  },
});

export default styles;

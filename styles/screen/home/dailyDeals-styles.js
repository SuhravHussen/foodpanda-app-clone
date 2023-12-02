import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  dailyDealsContainer: {
    backgroundColor: theme.lightColors?.background,
  },
  heading: {
    padding: 13,
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  allDealsContainer: {
    height: 220,
  },
  singleDeal: {
    width: 140,
    height: 180,
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
    borderRadius: 10,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "lightgrey",
  },

  image: {
    resizeMode: "stretch",
    height: "100%",
    width: "100%",
    backgroundColor: "#FFFAFAFA",
  },
});

export default styles;

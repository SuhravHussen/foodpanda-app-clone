import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  popularContainer: {
    backgroundColor: theme.lightColors?.background,
  },
  heading: {
    padding: 15,
    paddingTop: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  allRestaurantsContainer: {
    height: 220,
  },
  singleRestaurantContainer: {
    width: 245,
    height: 200,

    marginRight: 10,
    marginLeft: 10,
  },
  imageContainer: {
    height: "70%",
    width: "100%",
    overflow: "hidden",
    position: "relative",
    borderRadius: 10,
  },
  discountText: {
    position: "absolute",
    backgroundColor: theme?.lightColors?.primary,
    padding: 4,
    color: theme?.lightColors?.background,
    fontWeight: "bold",
    top: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 12,
  },
  couponText: {
    position: "absolute",
    backgroundColor: theme.lightColors?.primary,
    padding: 4,
    color: theme.lightColors?.background,
    fontWeight: "bold",
    top: 50,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    fontSize: 12,
  },
  deliveryTime: {
    position: "absolute",
    backgroundColor: theme.lightColors?.background,
    padding: 3,
    fontWeight: "bold",
    bottom: 10,
    borderRadius: 10,
    fontSize: 12,
    left: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    paddingHorizontal: 5,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 5,
  },
  tag: {
    fontSize: 15,
    color: "grey",
  },
  deliveryFee: {
    fontWeight: "bold",
    fontSize: 12,
    marginTop: 4,
  },
});

export default styles;

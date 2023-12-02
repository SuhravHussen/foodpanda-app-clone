import { StyleSheet } from "react-native";
import { theme } from "../../../theme";

const styles = StyleSheet.create({
  pickupContainer: {
    marginTop: -10,
    backgroundColor: theme.lightColors?.background,
  },
  heading: {
    padding: 15,
    fontWeight: "bold",
    fontSize: 18,
  },
  allRestaurantsContainer: {
    position: "relative",
    height: 250,
  },
  singleRestaurantContainer: {
    width: 300,
    height: 200,
    backgroundColor: theme.lightColors?.background,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderRadius: 15,
    alignSelf: "flex-end",
    marginBottom: 10,
  },
  imageContainer: {
    height: "77%",
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
  title: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  footerText: {
    fontSize: 14,
    color: "grey",
  },

  cardFooter: {
    flexDirection: "row",
  },
  footerLeft: {
    width: "70%",
  },
  footerRight: {
    flexDirection: "row",
    alignContent: "center",
    gap: 3,
    width: "30%",
    marginTop: 5,
  },
  reviewPoint: {
    fontSize: 12,
    fontWeight: "bold",
  },
  totalReviews: {
    color: "grey",
    fontWeight: "400",
  },
});

export default styles;

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerTitleContainer: {
    flex: 1,
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  searchBarContainer: {
    backgroundColor: "#fff",
    marginLeft: -10,
    width: "100%",
    flex: 1,
    padding: 0,
    justifyContent: "center",

    borderColor: "#fff",
  },
  searchBarInputContainerStyle: {
    backgroundColor: "#FAFAFA",
    height: 40,
    borderRadius: 8,
    width: "90%",
  },
  searchBarInputStyle: {
    fontWeight: "bold",
    color: "black",
    fontSize: 15,
  },
  gpsIconStyle: {
    position: "absolute",
    right: 8,
  },
});

export default styles;

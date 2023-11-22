import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  markerFixed: {
    left: "50%",
    marginLeft: -24,
    marginTop: -48,
    position: "absolute",
    top: "50%",
  },
  marker: {
    height: 48,
    width: 48,
  },
  footer: {
    bottom: 10,
    position: "absolute",
    width: "100%",
  },

  button: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "60%",
    marginBottom: 10,
  },

  suggestion: {
    padding: 10,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
});

export default styles;

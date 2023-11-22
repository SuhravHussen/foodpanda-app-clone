import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  setLocationContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 50,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    height: 110,
    width: 110,
  },
  image: {
    height: 110,
    width: 110,
  },
  textContainer: {
    justifyContent: "center",
  },
  textBig: {
    fontSize: 25,
    textAlign: "center",
    fontWeight: "bold",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    borderWidth: 2,
    borderColor: "#f9f9f9",
    borderRadius: 10,
    width: "100%",
    padding: 10,
    paddingVertical: 30,
    gap: 10,
  },
});

export default styles;

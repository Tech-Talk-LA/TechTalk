import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: 200,
  },
  loginButton: {
    backgroundColor: "blue",
    color: "white",
    padding: 20,
    borderRadius: 5,
  },
  feed: {
    borderWidth: 2,
    borderColor: "black",
  },
  feedbox: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "blue",
  },
});

export default styles;

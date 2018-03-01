import EStyleSheet from "react-native-extended-stylesheet";

const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    backgroundColor: "$blue",
    height: 48,
    width: "100%",
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    width: "100%",
  },
  disabled: {
    backgroundColor: "$grey",
  },
  text: {
    color: "$white",
  },
  faText: {
    alignItems: "center",
    fontFamily: "awesome",
    fontSize: 25,
    justifyContent: "center",
  },
  signInButton: {
    borderRadius: BORDER_RADIUS,
    marginVertical: 11,
    width: "90%",
  },
  peopleButton: {
    width: "100%",
  },
});

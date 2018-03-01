import EStyleSheet from "react-native-extended-stylesheet";

const INPUT_HEIGHT = 48;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
  container: {
    alignItems: "center",
    borderColor: "$grey",
    borderRadius: BORDER_RADIUS,
    borderWidth: 1,
    flexDirection: "row",
    height: INPUT_HEIGHT,
    marginVertical: 4,
    width: "90%",
  },
  plainText: {
    height: INPUT_HEIGHT,
    flex: 1,
    fontFamily: "$fontFamily",
    marginLeft: 11,
  },
});

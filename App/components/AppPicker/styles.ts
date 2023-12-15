import colors from "../../config/colors";
import {
  normalise,
  pixelSizeVertical,
  heightPixel,
  fontPixel,
} from "../../config/normalize";
import { StyleSheet, ViewStyle, TextStyle, View } from "react-native";

interface props {
  button: ViewStyle;
  container: ViewStyle;
  text: TextStyle;
  icon: ViewStyle;
}

export const styles = StyleSheet.create<props>({
  button: {},
  container: {
    flexDirection: "row",
    borderRadius: 25,
    backgroundColor: colors.secondary,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignContent: "center",
  },
  icon: {
    paddingTop: 5,
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

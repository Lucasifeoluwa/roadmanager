import { StyleSheet, TextStyle, ViewStyle } from "react-native";

import colors from "../../config/colors";
import { fontPixel, heightPixel } from "../../config/normalize";

type buttonContainer = {
  button: ViewStyle;
  text: TextStyle;
};
export const styles = StyleSheet.create<buttonContainer>({
  button: {
    borderRadius: 10,
    height: heightPixel(56),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  text: {
    color: "#fff",
    fontSize: fontPixel(15),
  },
});

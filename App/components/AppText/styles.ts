import { StyleSheet, TextStyle } from "react-native";
import colors from "../../config/colors";
import { fontPixel } from "../../config/normalize";

type textStyle = {
  text: TextStyle;
};

export const styles = StyleSheet.create<textStyle>({
  text: {
    fontSize: fontPixel(14),
    color: colors.black,
  },
});

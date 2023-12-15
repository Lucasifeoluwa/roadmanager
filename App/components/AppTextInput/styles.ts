import colors from "../../config/colors";
import {
  normalise,
  pixelSizeVertical,
  heightPixel,
  fontPixel,
} from "../../config/normalize";
import { StyleSheet, ViewStyle, TextStyle } from "react-native";

type props = {
  inputCtn: ViewStyle;
  textInput: TextStyle;
  container: ViewStyle;
  labelCtn: ViewStyle;
  leftLabel: TextStyle;
  rightLabel: TextStyle;
  forgotPasswordCtn: ViewStyle;
};

export const styles = StyleSheet.create<props>({
  inputCtn: {
    borderRadius: 10,
    borderColor: colors.lightgray,
    overflow: "hidden",
    flexDirection: "row",
    alignItems: "center",
    height: heightPixel(56),
  },
  textInput: { flex: 1, color: colors.black },
  container: {
    rowGap: pixelSizeVertical(3),
  },
  labelCtn: {
    flexDirection: "row",
    alignItems: "center",
  },
  leftLabel: {
    color: colors.darkgray,
    fontWeight: "700",
  },
  rightLabel: {
    color: colors.primary,
    fontWeight: "700",
  },
  forgotPasswordCtn: { flex: 1, alignItems: "flex-end" },
});

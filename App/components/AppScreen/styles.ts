import { StyleSheet, ViewStyle } from "react-native";
import colors from "../../config/colors";

type Screen = {
  container: ViewStyle;
};

export const styles = StyleSheet.create<Screen>({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
});

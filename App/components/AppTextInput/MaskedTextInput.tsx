import React from "react";
import { View, ViewStyle } from "react-native";
import { TextInputMask, TextInputMaskProps } from "react-native-masked-text";
import { styles } from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";

interface props {
  label?: string;
  viewStyle?: ViewStyle;
}

function MaskedTextInput({
  label,
  viewStyle,
  ...maskedViewProps
}: props & TextInputMaskProps) {
  return (
    <View style={styles.container}>
      <View style={styles.labelCtn}>
        {label && <AppText style={styles.leftLabel}>{label}</AppText>}
      </View>
      <View style={[styles.inputCtn, viewStyle]}>
        <TextInputMask
          style={styles.textInput}
          cursorColor={colors.black}
          placeholderTextColor={colors.darkgrey}
          {...maskedViewProps}
        />
      </View>
    </View>
  );
}

export default MaskedTextInput;

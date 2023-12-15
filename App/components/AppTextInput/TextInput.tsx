import React from "react";
import { Pressable, TextInput, TextInputProps, View } from "react-native";
import { AppInput } from "../../interfaces/AppComponents";
import { styles } from "./styles";
import AppText from "../AppText";
import colors from "../../config/colors";

export type IAppTextInputProps = AppInput & TextInputProps;

function AppTextInput({
  label,
  rightLabel,
  onRightLabelPress,
  viewStyle,
  ctnStyle,
  inputCtnStyle,
  ...otherProps
}: IAppTextInputProps) {
  return (
    <View style={[styles.container, ctnStyle]}>
      <View style={styles.labelCtn}>
        {label && <AppText style={styles.leftLabel}>{label}</AppText>}
        {rightLabel && (
          <Pressable style={styles.rightLabel} onPress={onRightLabelPress}>
            <AppText>{rightLabel}</AppText>
          </Pressable>
        )}
      </View>
      <View style={[styles.inputCtn, inputCtnStyle]}>
        <TextInput
          style={[styles.textInput, viewStyle]}
          cursorColor={colors.primary}
          placeholderTextColor={colors.lightgrey}
          {...otherProps}
        />
      </View>
    </View>
  );
}

interface displayProps {
  label: string;
  value?: string;
  placeholder: string;
}

export function DisplayFields({ label, placeholder, value }: displayProps) {
  return (
    <View style={[styles.container]}>
      <View style={styles.labelCtn}>
        {label && <AppText style={styles.leftLabel}>{label}</AppText>}
      </View>
      <View
        style={[
          styles.inputCtn,
          { backgroundColor: value ? colors.white : colors.lightgrey },
        ]}
      >
        <AppText style={{ color: colors.darkgrey }}>
          {value || placeholder}
        </AppText>
      </View>
    </View>
  );
}

export default AppTextInput;

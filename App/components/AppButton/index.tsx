import React, { FC } from "react";
import {
  ActivityIndicator,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import AppText from "../AppText";
import { styles } from "./styles";

interface buttonProps {
  title: string;
  onPress?: (data?: any) => void;
  style?: ViewStyle;
  textStyle?: TextStyle;
  disabled?: boolean;
  loading?: boolean;
}

const AppButton: FC<buttonProps> = ({
  title,
  onPress,
  disabled,
  loading,
  style,
  textStyle,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress && !loading ? onPress : () => console.log("Tapped")}
      style={[styles.button, { opacity: disabled ? 0.6 : 1 }, style]}
      disabled={disabled}
    >
      {loading ? (
        <ActivityIndicator size={"small"} color={"white"} />
      ) : (
        <AppText style={[styles.text, textStyle]}>{title}</AppText>
      )}
    </TouchableOpacity>
  );
};

export default AppButton;

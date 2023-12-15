import { FC } from "react";
import { TextStyle, TextProps, Text } from "react-native";
import { styles } from "./styles";

type textProps = {
  style?: TextStyle;
};

const AppText: FC<textProps & TextProps> = ({
  children,
  style,
  ...otherProps
}) => {
  return (
    <Text style={[styles.text, style]} {...otherProps}>
      {children}
    </Text>
  );
};

export default AppText;

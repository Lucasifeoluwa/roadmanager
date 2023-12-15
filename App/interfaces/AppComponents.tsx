import { ViewStyle } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export interface AuthInput {
  label?: string;
  forgotPassword?: boolean;
  onForgotPasswordPress?: () => void;
  isPassword?: boolean;
  viewStyle?: ViewStyle;
  rightLabel?: string;
}
export interface AppInput {
  label?: string;
  onRightLabelPress?: () => void;
  viewStyle?: ViewStyle;
  rightLabel?: string;
  ctnStyle?: ViewStyle;
  inputCtnStyle?: ViewStyle;
}

export type PickerListProp<T> = {
  onItemSelect: (selectedItem: string) => void;
  data: T;
};

export interface AppPickerProps<T> {
  data?: T[];
  label?: string;
  placeholder: string;
  disabled?: boolean;
  selectedItem?: string;
  pickerModalVisible?: boolean;
  closePickerModal?: () => void;
  showPickerModal?: () => void;
  PickerListComponent: (props: PickerListProp<T>) => JSX.Element;
  onSelectItem?: (item: string) => void;
  column?: number;
}

export interface Categories {
  color?: string;
  label?: string | undefined;
  value?: number;
  icon?: string;
}

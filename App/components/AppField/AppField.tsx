import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useFormikContext } from "formik";
import colors from "../../config/colors";
import AppTextInput, { IAppTextInputProps } from "../AppTextInput/TextInput";
import ErrorMessage from "../ErrorMessage/ErrorMEssage";

interface FieldProps {
  fieldName: string;
  showErrorMessage: boolean;
}

function AppField({
  fieldName,
  showErrorMessage,
  ...otherProps
}: FieldProps & IAppTextInputProps) {
  const { values, setFieldValue, setFieldTouched, errors, touched } =
    useFormikContext<Record<string, string>>();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View>
      <AppTextInput
        onBlur={() => setFieldTouched(fieldName)}
        value={values[fieldName]}
        onChangeText={(text) => setFieldValue(fieldName, text)}
        returnKeyType="done"
        viewStyle={{
          borderColor: isFocused ? colors.primary : colors.lightgrey,
        }}
        onFocus={() => setIsFocused(true)}
        onEndEditing={() => setIsFocused(false)}
        {...otherProps}
      />

      {showErrorMessage && (
        <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
      )}
    </View>
  );
}

export default AppField;

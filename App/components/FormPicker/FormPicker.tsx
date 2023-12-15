import { View } from "react-native";
import React from "react";
import { useFormikContext } from "formik";
import AppPicker from "../AppPicker/AppPicker";
import ErrorMessage from "../ErrorMessage/ErrorMEssage";
import { AppPickerProps } from "../../interfaces/AppComponents";

interface props<T> extends AppPickerProps<T> {
  fieldName: string;
  showErrorMessage?: boolean;
}

function FormPicker<T>({
  fieldName,
  showErrorMessage,
  PickerListComponent,
  data: list,
  closePickerModal,
  pickerModalVisible,
  placeholder,
  showPickerModal,
  disabled,
  ...otherProps
}: props<T>) {
  const { values, setFieldValue, errors, touched } =
    useFormikContext<Record<string, string>>();

  return (
    <View>
      <AppPicker
        selectedItem={values[fieldName]}
        PickerListComponent={PickerListComponent}
        data={list}
        closePickerModal={closePickerModal}
        pickerModalVisible={pickerModalVisible}
        placeholder={placeholder}
        showPickerModal={showPickerModal}
        disabled={disabled}
        {...otherProps}
        onSelectItem={(selectedItem) => {
          setFieldValue(fieldName, selectedItem);
        }}
      />
      {showErrorMessage && (
        <ErrorMessage error={errors[fieldName]} visible={touched[fieldName]} />
      )}
    </View>
  );
}

export default FormPicker;

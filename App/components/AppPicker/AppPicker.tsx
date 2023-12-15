import { View, TouchableWithoutFeedback, FlatList } from "react-native";
import React, { useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";

import AppText from "../AppText";
import { styles } from "./styles";

import { AppPickerProps } from "../../interfaces/AppComponents";
import colors from "../../config/colors";
import AppScreen from "../AppScreen";
import AppButton from "../AppButton";

export default function AppPicker<T>({
  PickerListComponent,
  data,
  placeholder,
  disabled,
  selectedItem,
  pickerModalVisible,
  closePickerModal,
  showPickerModal,
  onSelectItem = () => "",
  column,
}: AppPickerProps<T>) {
  return (
    <>
      <TouchableWithoutFeedback onPress={showPickerModal} disabled={disabled}>
        <View style={styles.container}>
          <MaterialCommunityIcons
            size={20}
            name="format-align-justify"
            style={styles.icon}
          />
          <AppText
            style={{ color: selectedItem ? colors.black : colors.darkgrey }}
          >
            {selectedItem ? selectedItem : placeholder}
          </AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.secondary}
          />
        </View>
      </TouchableWithoutFeedback>

      <View>
        <Modal
          isVisible={pickerModalVisible}
          onSwipeComplete={closePickerModal}
          swipeDirection={["down"]}
          onBackdropPress={closePickerModal}
        >
          <AppScreen>
            <AppButton
              title="close"
              onPress={closePickerModal}
              style={styles.button}
            />
            <FlatList
              data={data}
              numColumns={column}
              renderItem={({ item }) => (
                <PickerListComponent
                  data={item}
                  onItemSelect={(selectedItem) => {
                    onSelectItem(selectedItem);
                  }}
                />
              )}
            />
          </AppScreen>
        </Modal>
      </View>
    </>
  );
}

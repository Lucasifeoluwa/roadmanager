import React, { FC } from "react";
import { useFormikContext } from "formik";
import AppButton from "../AppButton/index";

interface Props {
  title: string;
  disabled?: boolean;
  loading?: boolean;
}

const SubmitButton: FC<Props> = ({ title, disabled, loading }) => {
  const { handleSubmit, isValid, dirty } = useFormikContext();
  return (
    <AppButton
      title={title}
      onPress={handleSubmit}
      disabled={disabled || !isValid || !dirty}
      loading={loading}
    />
  );
};

export default SubmitButton;

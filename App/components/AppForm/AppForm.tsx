import { Formik, FormikHelpers } from "formik";
import React, { Fragment } from "react";

type FormProps<T> = {
  initialValues: T;
  onSubmit: (values: T, formikHelpers: FormikHelpers<T>) => void | Promise<any>;
  validationSchema?: (() => any) | any;
  children: React.ReactNode;
};

export default function AppForm<T extends Record<string, string | number>>({
  children,
  initialValues,
  onSubmit,
  validationSchema,
}: FormProps<T>) {
  return (
    <Formik
      enableReinitialize
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {() => <Fragment>{children}</Fragment>}
    </Formik>
  );
}

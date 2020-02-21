import React from "react";
import { withFormik, Form, Field } from "formik";

function addForm() {
  return (
    <Form>
      <div />
      <div>
        {" "}
        <Field name="name" type="text" />
      </div>
      <div>
        <Field name="age" type="text" />
      </div>
      <div>
        <Field name="height" type="text" />
      </div>
      <button type="submit">Add smurf</button>
    </Form>
  );
}

export const FormikForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    console.log(props);
    props.postData(values);
    resetForm();
  }
})(addForm);

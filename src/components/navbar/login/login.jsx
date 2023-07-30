import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import s from "./login.module.css";

const Login = () => {
  return (
    <div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className={s.wrap}>
            <h1>Log in</h1>
            <button className={s.btn}>Google</button>
            <div>or</div>
            <Field className={s.input} type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field className={s.input} type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button className={s.btn} type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

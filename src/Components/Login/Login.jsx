import React, { useState } from "react";
import "./Login.css";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login({ setIsLoggedIn }) {
  const [error, setError] = useState(null);
  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleLogin = (values) => {
    // Simulate a login with username and password
    if (values.username === "user" && values.password === "password") {
      setIsLoggedIn(true);
      // Store user information in local storage
      localStorage.setItem("isLoggedIn", "true");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="container-fluid loginback py-5">
      <div className="container py-5">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            handleLogin(values);
            setSubmitting(false);
          }}
        >
          {({ isSubmitting }) => (
            <Form className="login-form">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSILw5WGZZ17Ruh6wP0sJftJW02sc1X4k140qyS0iKvW1WBuMyvw0JFl-t0NOTbFlKrueQ&usqp=CAU"
                className="formimg"
              />

              {error && <div className="alert alert-danger">{error}</div>}
              {
                <ErrorMessage
                  name="username"
                  component="div"
                  className="text-danger"
                />
              }
              <div className="form-group font fs-5">
                <label htmlFor="username">Username</label>
                <Field
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter Username"
                />
              </div>
              {
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-danger"
                />
              }
              <div className="form-group font fs-5">
                <label htmlFor="password">Password</label>
                <Field
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  placeholder="Password"
                />
              </div>
              <div className="text-center">
                <button
                  className=" login-button font fs-4"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Logging in..." : "Login"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Login;

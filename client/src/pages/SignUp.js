import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { Formik } from "formik";
import { signUp } from "../actions/auth";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialSignUpValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const signUpValidationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });

  const onSubmit = (values, { setSubmitting }) => {
    setSubmitting(true);
    console.log("isRegister values is ", values);
    dispatch(signUp(values, navigate));
  };

  return (
    <div className="flex bg-black w-full h-full font-mono">
      <div className="flex-1 flex items-center justify-center w-full h-screen flex-col">
        <div className="w-4/5 mb-6">
          <h1 className="text-xl font-medium text-blue-400">
            Create Your Account
          </h1>
        </div>
        <Formik
          initialValues={initialSignUpValues}
          validationSchema={signUpValidationSchema}
          onSubmit={onSubmit}
        >
          {(props) => {
            const {
              values,
              touched,
              errors,
              handleChange,
              handleBlur,
              handleSubmit,
            } = props;
            return (
              <form
                className="w-4/5 flex flex-col gap-3"
                onSubmit={handleSubmit}
              >
                <div className="flex gap-2">
                  <div className="flex-1">
                    <input
                      className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-blue-400 ${
                        touched.firstName && errors.firstName
                          ? "border-red-400"
                          : ""
                      }`}
                      placeholder="FirstName"
                      type="text"
                      id="firstName"
                      autoComplete="off"
                      value={values.firstName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="ml-2 text-red-400">
                      {touched.firstName && errors.firstName}
                    </p>
                  </div>
                  <div className="flex-1">
                    <input
                      className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-blue-400 ${
                        touched.lastName && errors.lastName
                          ? "border-red-400"
                          : ""
                      }`}
                      placeholder="LastName"
                      type="text"
                      id="lastName"
                      autoComplete="off"
                      value={values.lastName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <p className="ml-2 text-red-400">
                      {touched.lastName && errors.lastName}
                    </p>
                  </div>
                </div>
                <div>
                  <input
                    className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-blue-400 ${
                      touched.email && errors.email ? "border-red-400" : ""
                    }`}
                    placeholder="Email"
                    type="email"
                    id="email"
                    autoComplete="off"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="ml-2 text-red-400">
                    {touched.email && errors.email}
                  </p>
                </div>
                <div>
                  <input
                    className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-blue-400 ${
                      touched.password && errors.password
                        ? "border-red-400"
                        : ""
                    }`}
                    placeholder="Password"
                    type="password"
                    id="password"
                    autoComplete="off"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="ml-2 text-red-400">
                    {touched.password && errors.password}
                  </p>
                </div>
                <div>
                  <input
                    className={`w-full h-10 bg-transparent text-white font-mono outline outline-0 focus:outline-0 border focus:border-2 text-sm px-3 py-2.5 rounded-[7px] focus:border-blue-400 ${
                      touched.confirmPassword && errors.confirmPassword
                        ? "border-red-400"
                        : ""
                    }`}
                    placeholder="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    autoComplete="off"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="ml-2 text-red-400">
                    {touched.confirmPassword && errors.confirmPassword}
                  </p>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded w-full mt-3"
                  type="submit"
                >
                  Sign Up
                </button>
              </form>
            );
          }}
        </Formik>
        <div className="w-4/5 text-right mt-3">
          <Link to="/log-in">
            <p className="text-base hover:text-blue-400 cursor-pointer hover:underline text-white">
              Already have an account ? Log In
            </p>
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img src={"/images/sign-up.png"} alt="Sign Up" />
      </div>
    </div>
  );
};

export default SignUp;

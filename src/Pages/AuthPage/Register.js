import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import useInput from "../../hooks/use-input";

const Register = (props) => {
  const isNotEmpty = (value) => value.trim() !== "";
  const isEmail = (value) => value.includes("@");

  const {
    value: enteredUser,
    isValid: enteredUserIsValid,
    hasError: userInputError,
    valueChangeHandler: userChangeHandler,
    inputBlurHandler: userBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(isEmail);

  const {
    value: enteredPassword,
    isValid: enteredPasswordIsValid,
    hasError: passInputError,
    valueChangeHandler: passChangeHandler,
    inputBlurHandler: passBlurHandler,
  } = useInput(isNotEmpty);

  const {
    value: enteredRePassword,
    isValid: enteredRePasswordIsValid,
    valueChangeHandler: rePassChangeHandler,
    inputBlurHandler: rePassBlurHandler,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (
    enteredUserIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredRePasswordIsValid &&
    enteredPassword === enteredRePassword
  ) {
    formIsValid = true;
  }

  const userInputClasses = userInputError
    ? "block uppercase text-red-500 text-xs font-bold mb-2"
    : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const emailInputClasses = emailInputError
    ? "block uppercase text-red-500 text-xs font-bold mb-2"
    : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const passInputClasses = passInputError
    ? "block uppercase text-red-500 text-xs font-bold mb-2"
    : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const rePassInputClasses =
    enteredPassword !== enteredRePassword
      ? "block uppercase text-red-500 text-xs font-bold mb-2"
      : "block uppercase text-blueGray-600 text-xs font-bold mb-2";

  const formClassName = formIsValid
    ? "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    : "cursor-not-allowed bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";
  return (
    <Fragment>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-6/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              {/* <div className="rounded-t mb-0 px-6 py-6">
                <div className="text-center mb-3">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign up with
                  </h6>
                </div>
                <div className="btn-wrapper text-center">
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/facebook.svg").default}
                    />
                    facebook
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/twitter.svg").default}
                    />
                    twitter
                  </button>
                  <button
                    className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                    type="button"
                  >
                    <img
                      alt="..."
                      className="w-5 mr-1"
                      src={require("assets/img/google.svg").default}
                    />
                    Google
                  </button>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div> */}
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 mt-6">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <h1>sign up with credentials</h1>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label className={userInputClasses} htmlFor="grid-password">
                      Username
                    </label>
                    <input
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="username"
                      value={enteredUser}
                      onChange={userChangeHandler}
                      onBlur={userBlurHandler}
                      placeholder="Username"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className={emailInputClasses}
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="email"
                      value={enteredEmail}
                      onChange={emailChangeHandler}
                      onBlur={emailBlurHandler}
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label className={passInputClasses} htmlFor="grid-password">
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="password"
                      value={enteredPassword}
                      onChange={passChangeHandler}
                      onBlur={passBlurHandler}
                      placeholder="Password"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className={rePassInputClasses}
                      htmlFor="grid-password"
                    >
                      Re-Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      id="repassword"
                      value={enteredRePassword}
                      onChange={rePassChangeHandler}
                      onBlur={rePassBlurHandler}
                      placeholder="Re-Password"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <Link
                      to={{
                        pathname: "/auth/register_details",
                        username: enteredUser,
                        email: enteredEmail,
                        pass: enteredPassword,
                      }}
                    >
                      <button
                        disabled={!formIsValid}
                        className={formClassName}
                        type="button"
                      >
                        Next
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Register;

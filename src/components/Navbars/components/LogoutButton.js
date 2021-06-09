import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { app } from "../../../firebase/index";

import AuthContext from "../../../store/auth-context";

const LoginButton = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const logoutHandler = () => {
    window.confirm("Are you sure you want to log out") &&
      app
        .auth()
        .signOut()
        .then(() => {
          ctx.onLogout();
          history.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
  };
  return (
    <button
      className="bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
      type="button"
      onClick={logoutHandler}
    >
      <i className="fas fa-sign-out-alt"></i> Logout
    </button>
  );
};

export default LoginButton;

/*eslint-disable*/
import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import { auth, storeUserInfo } from "../../lib/api";

// components
import PagesDropdown from "components/Dropdowns/PagesDropdown.js";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";

const Navbar = (props) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const ctx = useContext(AuthContext);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      let newUser = null;
      if (user) {
        newUser = await storeUserInfo(user);
        ctx.onLogin(user.email.split('@')[0]);
      }

    });
  }, []);

  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              to="/"
            >
              Book Review
            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>

          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              {ctx.currentUser ? (
                <>
                  <li className="flex items-center" style={{ color: "white" }}>
                    Hello <span style={{fontWeight: "bold", marginLeft: "5px"}}>{ctx.currentUser}</span>
                  </li>
                  <li className="flex items-center">
                    <PagesDropdown
                      open={navbarOpen}
                      onClose={() => setNavbarOpen(!navbarOpen)}
                    />
                  </li>
                </>
              ) : null}
              <li className="flex items-center">
                {!ctx.isLoggedIn && <LoginButton />}
                {ctx.isLoggedIn && <LogoutButton />}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

import AuthContext from "../../store/auth-context";
import AuthLayout from "./components/AuthLayout";
import ProfileLayout from "./components/ProfileLayout";
import AdminLayout from "./components/AdminLayout";

const PagesDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };

  const ctx = useContext(AuthContext);

  return (
    <>
      <a
        className="lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        Browse
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
        style={{ marginTop: "0.5rem" }}
      >
        <span
          className={
            "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
          }
        >
          Genres
        </span>
        <Link
          to="/genre/Biography"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Biography
        </Link>
        <Link
          to="/genre/Business"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Business
        </Link>
        <Link
          to="/genre/History"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          History
        </Link>
        <Link
          to="/genre/Nonfiction"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Nonfiction
        </Link>
        <Link
          to="/genre/Fiction"
          className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        >
          Fiction
        </Link>
        {ctx.currentUser === "admin" && <AdminLayout />}
        {!ctx.isLoggedIn && <AuthLayout />}
        {ctx.isLoggedIn && <ProfileLayout currentUser={ctx.currentUser} />}
      </div>
    </>
  );
};

export default PagesDropdown;

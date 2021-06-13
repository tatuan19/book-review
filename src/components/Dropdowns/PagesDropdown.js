import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { createPopper } from "@popperjs/core";

import AuthContext from "../../store/auth-context";
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
        Account
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
        style={{ marginTop: "0.5rem" }}
      >
        {/* {ctx.currentUser === "admin" && <AdminLayout />} */}
        <AdminLayout />
        <ProfileLayout currentUser={ctx.currentUser} />
      </div>
    </>
  );
};

export default PagesDropdown;

import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const AdminLayout = (props) => {
  return (
    <Fragment>
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
        Admin Layout
      </span>
      <Link
        to="/addingBook"
        className="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
      >
        Add Book
      </Link>
    </Fragment>
  );
};

export default AdminLayout;

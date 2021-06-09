import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const ProfileLayout = (props) => {
  return (
    <Fragment>
      <span
        className={
          "text-sm pt-2 pb-0 px-4 font-bold block w-full whitespace-nowrap bg-transparent text-blueGray-400"
        }
      >
        Profile
      </span>
      <Link
        to={`/profile/${props.currentUser}`}
        className={
          "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
        }
      >
        {props.currentUser}
      </Link>
    </Fragment>
  );
};

export default ProfileLayout;

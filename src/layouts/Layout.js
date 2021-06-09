import { Fragment } from "react";

import AuthNavbar from "../components/Navbars/AuthNavbar";

const Layout = (props) => {
  return (
    <Fragment>
      <AuthNavbar transparent />
      {props.children}
    </Fragment>
  );
};

export default Layout;

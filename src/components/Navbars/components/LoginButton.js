import React from "react";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

import { firebase, auth, uiConfig } from "../../../lib/api";

const LoginButton = () => {
  return (
    <div className="column panel-block">
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
    </div>
  );
};

export default LoginButton;

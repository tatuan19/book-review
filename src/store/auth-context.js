import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  currentUser: "",
  onLogout: () => {},
  onLogin: () => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    const storedUserInformation = localStorage.getItem("currentUser");

    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
      setCurrentUser(storedUserInformation);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("currentUser");
    setIsLoggedIn(false);
    setCurrentUser("");
    console.log("Logout success!");
  };

  const loginHandler = (currentUser) => {
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
    localStorage.setItem("currentUser", currentUser);
    setCurrentUser(currentUser);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        currentUser: currentUser,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;

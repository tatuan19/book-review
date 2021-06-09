import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

// components

// views
import Login from "./Login";
import Register from "./Register";
import RegisterDetails from "./RegisterDetails";

function Auth() {
  return (
    <Fragment>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage:
              "url(" + require("assets/img/register_bg_2.png").default + ")",
          }}
        ></div>
        <Switch>
          <Route path="/auth/login" exact component={Login} />
          <Route path="/auth/register" exact component={Register} />
          <Route
            path="/auth/register_details"
            exact
            component={RegisterDetails}
          />
          <Redirect from="/auth" to="/auth/login" />
        </Switch>
      </section>
    </Fragment>
  );
}

export default Auth;

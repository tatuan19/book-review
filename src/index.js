import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

// views without layouts

import Landing from "./Pages/MainPage/Landing";
import Profile from "./Pages/Profile/Profile";
// import TestComponent from "TestComponent";
import Layout from "layouts/Layout";
import Footer from "./components/Footers/FooterSmall";
// import Login from "Pages/AuthPage/Login";
import Auth from "./Pages/AuthPage/Auth";
import AddBook from "./Pages/AddBookPage/AddBook";

import { AuthContextProvider } from "./store/auth-context";
import BookDetail from "Pages/BookDetailPage/BookDetail";
import EditUserDetails from "./Pages/Profile/components/EditUserDetails";
import EditBook from "./Pages/BookDetailPage/Components/EditBook/EditBook";
import BookGenre from "Pages/BookGenre/BookGenre";

ReactDOM.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Landing} />

          <Route path="/profile/:username" component={Profile} />
          <Route path="/book/:bookId" component={BookDetail} />
          <Route path="/edit/:username" exact component={EditUserDetails} />
          <Route path="/genre/:type" exact component={BookGenre} />

          <Route path="/addingBook" component={AddBook} />
          <Route path="/editBook/:isbn" exact component={EditBook} />

          <Redirect from="*" to="/" />
        </Switch>
      </Layout>
      <Footer />
    </BrowserRouter>
  </AuthContextProvider>,
  document.getElementById("root")
);

// ReactDOM.render(<TestComponent />, document.getElementById("root"));

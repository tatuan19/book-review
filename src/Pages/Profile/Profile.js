import React, { Fragment, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import useHttp from "../../hooks/use-http";
import { getProfile } from "../../lib/api";
import AuthContext from "../../store/auth-context";

import ProfileDetail from "./components/ProfileDetail";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

import classes from "./Profile.module.css";

const Profile = (props) => {
  const params = useParams();
  const ctx = useContext(AuthContext);

  const { username } = params;
  const isAdminProfile = ctx.currentUser === "admin";
  const isOwnProfile = ctx.currentUser === username;

  const {
    sendRequest,
    status,
    data: loadedProfile,
    error,
  } = useHttp(getProfile, true);

  useEffect(() => {
    sendRequest(username.toLowerCase());
  }, [sendRequest, username]);

  if (status === "pending") {
    return (
      <div
        style={{
          margin: "3rem auto",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <LoadingSpinner />
      </div>
    );
  }

  let content = null;

  if (error) {
    content = <p className={classes.centered}>{error}</p>;
  }

  if (!loadedProfile.name) {
    content = <p className={classes.centered}>No username found!</p>;
  }

  return (
    <Fragment>
      <main className="profile-page">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section
          className="relative py-16 bg-blueGray-200"
          style={{ marginBottom: "54.95rem" }}
        >
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6"></div>
              {!content ? (
                <ProfileDetail
                  profile={loadedProfile}
                  adminProfile={isAdminProfile}
                  ownProfile={isOwnProfile}
                />
              ) : (
                content
              )}
              <div className="mt-10 py-10">
                {/* <h3
                  className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2"
                  style={{ marginLeft: "2rem" }}
                >
                  {!content && `${username}'s Rated Book`}
                </h3>

                <div className="flex flex-wrap justify-center">
                  {!content ? (
                    <BooksList />
                  ) : (
                    <div style={{ height: "60.1vh" }}></div>
                  )}
                </div> */}
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default Profile;

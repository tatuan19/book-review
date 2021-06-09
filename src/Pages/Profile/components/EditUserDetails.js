import React, { Fragment, useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";

import useInput from "../../../hooks/use-input";
import useHttp from "../../../hooks/use-http";
import { editUser } from "../../../lib/api";
import { getProfile } from "../../../lib/api";

import UploadButton from "./UploadButton";
import AuthContext from "../../../store/auth-context";

const EditUserDetails = (props) => {
  const ctx = useContext(AuthContext);

  const params = useParams();
  const history = useHistory();
  const { username } = params;

  if (ctx.currentUser !== username) {
    history.push("/");
  }

  const { sendRequest: updateProfile, status: updateStatus } =
    useHttp(editUser);

  const [profile, setProfile] = useState(
    "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/profile%2Fblank-profile.png?alt=media&token=d0ae9cbf-1394-4308-aa37-e06a4867bb76"
  );

  const {
    sendRequest,
    status,
    data: loadedProfile,
    error,
  } = useHttp(getProfile, true);

  const [profileData, setProfileData] = useState("");

  useEffect(() => {
    sendRequest(username.toLowerCase());
  }, [sendRequest, username]);

  useEffect(() => {
    if (status === "completed") {
      setProfile(loadedProfile.userProfile);
      setProfileData(loadedProfile);
    }
  }, [status, loadedProfile]);

  useEffect(() => {
    if (updateStatus === "completed") {
      history.push(`/profile/${loadedProfile.username}`);
    }
  }, [updateStatus, history, loadedProfile]);

  const { value: enteredName, valueChangeHandler: nameChangeHandler } =
    useInput(() => {});

  const { value: enteredLocation, valueChangeHandler: LocationChangeHandler } =
    useInput(() => {});

  const { value: enteredDetails, valueChangeHandler: detailsChangeHandler } =
    useInput(() => {});

  const imgUploadHandler = (img) => {
    setProfile(img);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const userData = {
      username: loadedProfile.username,
      email: loadedProfile.email,
      uid: loadedProfile.uid,
      name: enteredName || loadedProfile.name,
      userLocation: enteredLocation || loadedProfile.userLocation,
      userDetail: enteredDetails || loadedProfile.userDetail,
      userProfile: profile,
    };
    await updateProfile(userData);
    history.push(`/profile/${loadedProfile.username}`);
  };

  if (error) {
    console.log("error!");
  }

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
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
                <div className="flex-auto px-4 lg:px-10 py-10 pt-10">
                  <div className="mb-5">
                    <div className="px-6">
                      <img
                        alt="..."
                        src={profile}
                        className="shadow-lg rounded-full mx-auto max-w-120-px"
                      />
                    </div>
                  </div>
                  <form onSubmit={submitHandler}>
                    <UploadButton imgUpload={imgUploadHandler} />
                    <div className="relative w-full mb-3 my-2">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="name"
                        value={enteredName}
                        onChange={nameChangeHandler}
                        placeholder={profileData.name}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Location
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        id="location"
                        value={enteredLocation}
                        onChange={LocationChangeHandler}
                        placeholder={profileData.userLocation}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        About you
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        style={{ height: "100px" }}
                        id="details"
                        value={enteredDetails}
                        onChange={detailsChangeHandler}
                        placeholder={profileData.userDetail}
                      />
                    </div>

                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Edit account
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default EditUserDetails;

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

import EditFrom from "./EditForm";
import AuthContext from "../../../../store/auth-context";

const EditBook = () => {
  const ctx = useContext(AuthContext);
  const history = useHistory();

  if (ctx.currentUser !== "admin") {
    history.push("/");
  }

  return (
    <>
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
            className="w-full h-full absolute opacity-75 bg-black"
          ></span>
        </div>
        <div className="container relative mx-auto">
          <div className="items-center flex flex-wrap">
            <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
              <h1 className="text-white font-semibold text-4xl pt-32">
                Has anything changed?
              </h1>
            </div>
          </div>
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
      <section className="relative py-16 bg-blueGray-200">
        <div
          className="container mx-auto px-4"
          style={{ marginBottom: "9.75rem" }}
        >
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full shadow-xl rounded-lg -mt-64">
            <EditFrom />
          </div>
        </div>
      </section>
    </>
  );
};

export default EditBook;

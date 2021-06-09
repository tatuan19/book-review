import React from "react";
import { Link } from "react-router-dom";
const ShowComment = (props) => {
  return (
    <>
      <div className="mt-1 py-1 border-b border-blueGray-200">
        <p
          className="mb-1 text-lg leading-relaxed text-blueGray-700 break-words"
          style={{ paddingLeft: "5rem", paddingRight: "5rem" }}
        >
          <div className="flex flex-wrap">
            <div className="py-6 mt-32 sm:mt-0">
              <div className=" font-bold">
                <Link to={`/profile/${props.user}`}>{props.user}</Link>
                {" : "}
                <span className="text-base font-bold tracking-wide text-blueGray-600 ml-1">
                  {props.score}
                </span>
                <span
                  id="basic-addon1"
                  className="input-group-text fas fa-star ml-2"
                  style={{ color: "salmon" }}
                ></span>
              </div>
            </div>
            <textarea
              value={props.comment}
              cols="10"
              rows="3"
              type="text"
              readOnly="true"
              className="mb-5 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow  w-full "
              placeholder="Comment"
            />
          </div>
        </p>
      </div>
    </>
  );
};

export default ShowComment;

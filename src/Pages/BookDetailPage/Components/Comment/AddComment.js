import React, { useEffect, useContext } from "react";
import { useHistory } from "react-router-dom";

import useInput from "../../../../hooks/use-input";
import useHttp from "../../../../hooks/use-http";
import { addComment } from "../../../../lib/api";

import AuthContext from "../../../../store/auth-context";

const AddComment = (props) => {
  const ctx = useContext(AuthContext);
  const history = useHistory();

  const isbn = props.isbn;

  const { sendRequest, status } = useHttp(addComment);

  useEffect(() => {
    if (status === "completed") {
      window.location.reload(false);
    }
  }, [status, history]);

  const isNotEmpty = (value) => value.trim() !== "";

  const {
    value: enteredComment,
    valueChangeHandler: commentChangeHandler,
    isValid: enteredCommentisValid,
  } = useInput(isNotEmpty);

  const {
    value: enteredScore,
    valueChangeHandler: scoreChangeHandler,
    isValid: enteredScoreisValid,
  } = useInput(isNotEmpty);

  const submitHandler = async (event) => {
    event.preventDefault();
    await sendRequest({
      commentDetails: {
        username: ctx.currentUser,
        comment: enteredComment,
        score: enteredScore,
      },
      bookId: isbn,
    });
  };

  let formIsValid = false;

  if (enteredScore && enteredComment) {
    formIsValid = true;
  }

  const formClassName = formIsValid
    ? "bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
    : "cursor-not-allowed bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150";

  if (enteredCommentisValid && enteredScoreisValid) {
    formIsValid = true;
  }

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className="flex flex-wrap justify-between">
          <div className="flex mx-auto py-4 lg:pt-4 pt-8">
            <div className="mr-0 p-3 text-center ">
              <span className="text-xl font-bold block tracking-wide text-blueGray-600">
                username : {ctx.currentUser}
              </span>
            </div>
          </div>

          <div className="py-6 mx-auto mt-32 sm:mt-0 ">
            <input
              value={enteredScore}
              type="number"
              maxLength="1"
              min="1"
              max="5"
              className="placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow mr-2 text-center"
              style={{ width: "80px" }}
              placeholder="Score"
              onChange={scoreChangeHandler}
            />
            <span
              id="basic-addon1"
              className="input-group-text fas fa-star"
              style={{ color: "salmon" }}
            ></span>
          </div>
        </div>

        <div className="mx-auto" style={{ width: "80%" }}>
          <textarea
            value={enteredComment}
            cols="10"
            rows="5"
            type="text"
            className="placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            placeholder="Comment"
            onChange={commentChangeHandler}
          />
          <div className="text-left my-6">
            <button
              className={formClassName}
              type="submit"
              disabled={!formIsValid}
            >
              Comment
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AddComment;

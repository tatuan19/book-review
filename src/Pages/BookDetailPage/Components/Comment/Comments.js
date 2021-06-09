import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";
import React, { useEffect } from "react";

import useHttp from "../../../../hooks/use-http";
import { getAllComments } from "../../../../lib/api";
import ShowComment from "./ShowComment";

const Comments = (props) => {
  const isbn = props.isbn;

  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);

  useEffect(() => {
    sendRequest(isbn);
  }, [isbn, sendRequest]);

  let comments = "";

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed") {
    comments = loadedComments.map((data) => (
      <ShowComment
        user={data.username}
        comment={data.comment}
        score={data.score}
      />
    ));
  }

  return comments;
};

export default Comments;

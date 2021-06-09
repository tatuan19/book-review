import { Fragment, useEffect } from "react";

import useHttp from "../../../../hooks/use-http";
import { getAllBooks } from "../../../../lib/api";
import Book from "./Book";

import LoadingSpinner from "components/LoadingSpinner/LoadingSpinner";

const BooksPreview = (props) => {
  const {
    sendRequest,
    status,
    data: loadedBook,
    error,
  } = useHttp(getAllBooks, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (status === "completed" && (!loadedBook || loadedBook.length === 0)) {
    return <p className="centered focused"> No books found</p>;
  }

  // console.log(loadedBook[0].bookId);

  const createBookLists = loadedBook
    // .filter((book) => book.score > 4)
    .slice(0, 9)
    .sort((a, b) => b.score - a.score)
    .map((book) => (
      <Book
        key={book.bookId}
        bookId={book.bookId}
        title={book.title}
        author={book.author}
        bookImg={book.link}
        score={book.score}
      />
    ));

  return (
    <Fragment>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">{createBookLists}</div>
      </div>
    </Fragment>
  );
};
export default BooksPreview;

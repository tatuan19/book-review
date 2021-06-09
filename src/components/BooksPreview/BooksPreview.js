import { Fragment, useEffect } from "react";
import useHttp from "../../hooks/use-http";
import { getAllBooks } from "../../lib/api";
import Book from "./Book";

import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const BooksPreview = (props) => {
  const genre = props.genre.toLowerCase();

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

  const createBookLists = loadedBook
    .filter((book) => book.genres.toLowerCase() === genre)
    .map((book) => (
      <Book
        key={book.bookId}
        title={book.title}
        bookId={book.bookId}
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

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

  let filtedBooks = loadedBook.filter((book) => (book.title.search(new RegExp(props.keyword, "i")) > -1));
  if (props.scoreFilter != 0) {
    filtedBooks = filtedBooks
      .filter((book) => (Math.round(book.score * 10 / book.reviews) / 10) >= props.scoreFilter)
  }
  if (props.genreFilter != "All") {
    filtedBooks = filtedBooks.filter((book) => (book.genres == props.genreFilter));
  }

  const displayedBooks = filtedBooks
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
        reviews={book.reviews ? book.reviews : 0}
      />
    ));

  return (
    <Fragment>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">{displayedBooks}</div>
      </div>
    </Fragment>
  );
};
export default BooksPreview;

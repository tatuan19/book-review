import { Fragment } from "react";

import BookRecommended from "./BookRecommended";

const DUMMY_TONY_BOOKLISTS = [
  {
    title: "Business @ the Speed of Thought: Succeeding in the Digital Economy",
    author: "Bill Gates",
    bookImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/book_img%2Fbusiness_at.png?alt=media&token=163f6558-8693-4460-95e1-2a90f1771804",
    desciption: ``,
    score: 3.83,
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    bookImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/book_img%2Fthinking_fast.png?alt=media&token=427d265f-dc31-4b83-8359-669685a23ee5",
    desciption: ``,
    score: 4.16,
  },
  {
    title: "Teach Yourself To Think",
    author: "Edward de Bono",
    bookImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/book_img%2Fteach_yourself.png?alt=media&token=8db2ac2e-aecf-47a2-a418-3627c8cc4695",
    desciption: ``,
    score: 3.67,
  },
  {
    title: "Blink",
    author: "Malcolm Gladwell",
    bookImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/book_img%2FBlink.jpg?alt=media&token=95c794d9-1125-49f5-a6ed-252c0970f142",
    desciption: ``,
    score: 3.94,
  },
  {
    title: "Six Thinking Hats",
    author: "Edward de Bono",
    bookImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/book_img%2FSixThinkingHats.jpg?alt=media&token=af4f4ae7-8a43-4205-b027-ef7ea40e0171",
    desciption: ``,
    score: 3.73,
  },
];

const BooksList = (props) => {
  const createBookLists = DUMMY_TONY_BOOKLISTS.map((book) => (
    <BookRecommended
      key={Math.random().toString()}
      title={book.title}
      author={book.author}
      bookImg={book.bookImg}
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
export default BooksList;

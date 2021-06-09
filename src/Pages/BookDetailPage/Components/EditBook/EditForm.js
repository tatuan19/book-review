import React, { Fragment, useState, useEffect } from "react";

import { useHistory, useParams } from "react-router-dom";
import useInput from "../../../../hooks/use-input";
import useHttp from "../../../../hooks/use-http";
import { editBook } from "../../../../lib/api";
import { getSingleBook } from "../../../../lib/api";
import UploadBookButton from "../../../AddBookPage/Components/UploadBookButton";

const AddFrom = () => {
  const params = useParams();
  const { isbn } = params;

  const { sendRequest: updateBook } = useHttp(editBook);

  const history = useHistory();

  const [bookImage, setBookImage] = useState(
    "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/book_img%2Fbook.jpg?alt=media&token=a10fcc24-fc0a-4e7e-96ae-f8cada52f055"
  );

  const {
    sendRequest,
    status,
    data: loadedBook,
  } = useHttp(getSingleBook, true);

  const [bookData, setBookData] = useState("");

  useEffect(() => {
    sendRequest(isbn);
  }, [sendRequest, isbn]);

  useEffect(() => {
    if (status === "completed") {
      setBookImage(loadedBook.link);
      setBookData(loadedBook);
    }
  }, [status, history, loadedBook]);

  const { value: enteredGenres, valueChangeHandler: genresChangeHandler } =
    useInput(() => {});

  const { value: enteredTitle, valueChangeHandler: titleChangeHandler } =
    useInput(() => {});

  const { value: enteredBookId, valueChangeHandler: bookidChangeHandler } =
    useInput(() => {});

  const { value: enteredAuthor, valueChangeHandler: authorChangeHandler } =
    useInput(() => {});

  const {
    value: enteredDescription,
    valueChangeHandler: descriptionChangeHandler,
  } = useInput(() => {});

  const { value: enteredPages, valueChangeHandler: pagesChangeHandler } =
    useInput(() => {});

  const { value: enteredPublish, valueChangeHandler: publishChangeHandler } =
    useInput(() => {});

  const imgUploadHandler = (img) => {
    setBookImage(img);
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("go");
    const bookData = {
      genres: enteredGenres || loadedBook.genres,
      title: enteredTitle || loadedBook.title,
      bookId: enteredBookId || loadedBook.bookId,
      author: enteredAuthor || loadedBook.author,
      description: enteredDescription || loadedBook.description,
      pages: enteredPages || loadedBook.pages,
      publish: enteredPublish || loadedBook.publish,
      link: bookImage,
      score: 0,
    };

    await updateBook(bookData);
    history.push(`/book/${isbn}`);
  };
  return (
    <Fragment>
      <div className="container mx-auto px-4 h-full mt-10">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full  lg:w-12/12 px-4 py-10">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6">
                <div className="px-6 mb-8">
                  <img
                    alt="..."
                    src={bookImage}
                    className="shadow-lg mx-auto max-w-200-px"
                  />
                </div>

                <form onSubmit={submitHandler}>
                  <UploadBookButton imgUpload={imgUploadHandler} />
                  <br></br>
                  <div className="relative w-full mb-3 mt-10">
                    <input
                      id="genres"
                      value={enteredGenres}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={genresChangeHandler}
                      placeholder={bookData.genres}
                    />
                  </div>
                  <br></br>
                  <div className="textarea w-full mb-3">
                    <input
                      id="Title"
                      value={enteredTitle}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={titleChangeHandler}
                      placeholder={bookData.title}
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Bookid"
                      value={enteredBookId}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={bookidChangeHandler}
                      placeholder={bookData.bookId}
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Author"
                      value={enteredAuthor}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={authorChangeHandler}
                      placeholder={bookData.author}
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <textarea
                      id="Description"
                      value={enteredDescription}
                      type="text"
                      className="border-0 px-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 row-5"
                      style={{ height: "150px" }}
                      onChange={descriptionChangeHandler}
                      placeholder={bookData.description}
                    ></textarea>
                  </div>

                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Pages"
                      value={enteredPages}
                      type="number"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={pagesChangeHandler}
                      placeholder={bookData.pages}
                    />
                  </div>
                  <br></br>

                  <div className="relative w-full mb-3">
                    <input
                      id="Publish"
                      value={enteredPublish}
                      type="text"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      onChange={publishChangeHandler}
                      placeholder={bookData.publish}
                    />
                  </div>
                  <br></br>

                  <div className="text-center ">
                    <button
                      id="show-info"
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Update
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}; 

export default AddFrom;

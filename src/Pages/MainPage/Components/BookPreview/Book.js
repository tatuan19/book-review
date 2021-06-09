import { Fragment } from "react";
import { Link } from "react-router-dom";

const Book = (props) => {
  return (
    <Fragment>
      <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
          <div className="px-4 py-5 flex-auto">
            <Link to={`/book/${props.bookId}`}>
              <div className="text-white text-center inline-flex items-center justify-center w-15 h-15 mb-5 shadow-lg">
                <img src={props.bookImg} alt="..."></img>
              </div>
            </Link>
            <h6 className="text-lg font-semibold text-center">{props.title}</h6>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold text-center">
              {props.author}
            </p>
            <p className="mt-2 mb-4 text-blueGray-500 ">{props.desciption}</p>
            {/* <div style={{ color: "salmon", textAlign: "right" }}>
              {props.score} <i className="fas fa-star text-yellow"></i>
            </div> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Book;

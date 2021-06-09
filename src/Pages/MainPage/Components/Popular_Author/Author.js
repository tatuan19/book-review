import { Fragment } from "react";

const Author = (props) => {
  return (
    <Fragment>
      <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
        <div className="px-6">
          <img
            alt="..."
            src={props.img}
            className="shadow-lg rounded-full mx-auto max-w-120-px"
          />
          <div className="pt-6 text-center">
            <h5 className="text-xl font-bold">{props.name}</h5>
            <p className="mt-1 text-sm text-blueGray-400 uppercase font-semibold">
              {props.popBook}
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Author;

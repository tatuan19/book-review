import { useState, useEffect } from "react";
import { isShorthandPropertyAssignment } from "typescript";

const { Fragment } = require("react");

const Quote = (props) => {
  const [quote, setQuote] = useState([]);

  async function getData() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-4xl">
                {quote.content}
              </h1>
              <p className="mt-4 text-lg text-blueGray-200">{quote.author}</p>
              <div
                style={{
                  marginTop: "50px"
                }}
              >
                <label id="score-label" for="score"
                >
                </label>
                <select name="score" id="score"
                  onChange={(e) => { props.scoreFilterHandler(e.target.value) }}
                >
                  <option value={0}>All score</option>
                  <option value={1}>1 and above</option>
                  <option value={2}>2 and above</option>
                  <option value={3}>3 and above</option>
                  <option value={4}>4 and above</option>
                  <option value={5}>5</option>
                </select>
                <label
                  id="genre-label" for="genre">
                </label>
                <select name="genre" id="genre"
                  onChange={(e) => { props.genreFilterHandler(e.target.value) }}
                >
                  <option value="All">All genre</option>
                  <option value="Biography">Biography</option>
                  <option value="Business">Business</option>
                  <option value="History">History</option>
                  <option value="Nonfiction">Nonfiction</option>
                  <option value="Fiction">Fiction</option>
                </select>
                <input
                  type="text"
                  id="search"
                  placeholder="Input search..."
                  style={{ width: "60%" }}
                  onChange={(e) => { props.searchHandler(e.target.value) }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Quote;

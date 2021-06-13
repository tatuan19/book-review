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
              {/* <div id="filter" style={{marginTop: "100px", display: "flex", backgroundColor: "white", height: "80px"}}>
                <div>
                  <input type="text" id="search"/>
                </div>
                <div style={{}}>
                  <label id="score-label" for="score" style={{color: "black",margin: "10px"}}>Score:</label>
                  <select name="score" id="score" style={{width: "220px"}}>
                    <option value="2">2 and above</option>
                    <option value="3">3 and above</option>
                    <option value="4">4 and above</option>
                    <option value="5">5</option>
                  </select>
                  <label id="genre-label" for="genre" style={{color: "black",margin: "10px", paddingLeft: "85px"}}>Genre:</label>
                  <select name="genre" id="genre" style={{width: "220px"}}>
                    <option value="Biography">Biography</option>
                    <option value="Business">Business</option>
                    <option value="History">History</option>
                    <option value="Nonfiction">Nonfiction</option>
                    <option value="Fiction">Fiction</option>
                  </select>
                </div>
                <button id="searchBtn" style={{color: "black", backgroundColor: "gainsboro", width: "220px", marginLeft: "113px"}}>Search</button>
              </div> */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "670px auto",
                  backgroundColor: "white",
                  marginTop: "50px",
                }}
              >
                <div>
                  <div>
                    <input
                      type="text"
                      id="search"
                      style={{ width: "-webkit-fill-available" }}
                      placeholder="Input search..."
                      onChange={(e) => { props.searchHandler(e.target.value) }}
                    />
                  </div>
                  <div>
                    <label
                      id="score-label"
                      for="score"
                      style={{ color: "black", margin: "10px" }}
                    >
                      Score:
                    </label>
                    <select name="score" id="score" style={{ width: "220px" }}
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
                      id="genre-label"
                      for="genre"
                      style={{
                        color: "black",
                        margin: "10px",
                        paddingLeft: "85px",
                      }}
                    >
                      Genre:
                    </label>
                    <select name="genre" id="genre" style={{ width: "236px" }}
                      onChange={(e) => { props.genreFilterHandler(e.target.value) }}
                    >
                      <option value="All">All genre</option>
                      <option value="Biography">Biography</option>
                      <option value="Business">Business</option>
                      <option value="History">History</option>
                      <option value="Nonfiction">Nonfiction</option>
                      <option value="Fiction">Fiction</option>
                    </select>
                  </div>
                </div>
                <div style={{ backgroundColor: "gainsboro" }}>
                  <button
                    id="searchBtn"
                    style={{
                      color: "black",
                      verticalAlign: "-webkit-baseline-middle",
                      paddingTop: "28px"
                    }}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Quote;

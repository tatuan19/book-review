import React from "react";
import { useState, useEffect } from "react";

// components
import BooksPreview from "./Components/BookPreview/BooksPreview";
import QuoteSection from "./Components/QuoteSection/QuoteSection";
// import Authors from "../MainPage/Components/Popular_Author/Authors";

export default function Landing() {
  const [searchKW, setSearchKW] = useState("");
  const [scoreFilter, setScoreFilter] = useState(0);
  const [genreFilter, setGenreFilter] = useState("All");

  return (
    <>
      <main>
        <QuoteSection scoreFilterHandler={setScoreFilter} genreFilterHandler={setGenreFilter} searchHandler={setSearchKW}/>
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <BooksPreview scoreFilter={scoreFilter} genreFilter={genreFilter} keyword={searchKW}/>
        </section>
      </main>
    </>
  );
}

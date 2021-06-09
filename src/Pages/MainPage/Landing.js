import React from "react";

// components
import BooksPreview from "./Components/BookPreview/BooksPreview";
import QuoteSection from "./Components/QuoteSection/QuoteSection";
// import Authors from "../MainPage/Components/Popular_Author/Authors";

export default function Landing() {
  return (
    <>
      <main>
        <QuoteSection />
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <BooksPreview />
        </section>
      </main>
    </>
  );
}

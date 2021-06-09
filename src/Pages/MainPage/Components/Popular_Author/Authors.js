import { Fragment } from "react";
import Author from "./Author";
import LoremIpsum from "react-lorem-ipsum";

const DUMMY_AUTHORS = [
  {
    name: "Huraki Murakami",
    popBook: "Novigien Wood",
    authorImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/author_img%2FMurakami.jpg?alt=media&token=8a3a126c-3a60-4589-a08d-383388e4e9aa",
  },
  {
    name: "George Orwell",
    popBook: "1984",
    authorImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/author_img%2Forwell.png?alt=media&token=b4ac29d2-68db-40f7-a387-096999933824",
  },
  {
    name: "ณัฐพล ใจจริง",
    popBook: "ขอฝันใฝ่ในฝันอันเหลือเชื่อ",
    authorImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/author_img%2FNatthapol.jpg?alt=media&token=8d67fae6-8bb4-4eef-bf04-4a08061dce83",
  },
  {
    name: "Hermann Hesse",
    popBook: "Siddhartha",
    authorImg:
      "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/author_img%2Fhesse.jpg?alt=media&token=3ebd21fe-36b2-4784-890f-b558dc13182f",
  },
];

const PopAuthorsList = DUMMY_AUTHORS.map((author) => (
  <Author
    key={Math.random()}
    name={author.name}
    popBook={author.popBook}
    img={author.authorImg}
  />
));

const Authors = (props) => {
  return (
    <Fragment>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-6/12 px-4">
            <h2 className="text-4xl font-semibold">Popular Author</h2>
            <div className="text-lg leading-relaxed m-4 text-blueGray-500">
              <LoremIpsum
                avgSentencesPerParagraph={5}
                avgWordsPerSentence={3}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap">{PopAuthorsList}</div>
      </div>
    </Fragment>
  );
};

export default Authors;

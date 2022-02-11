import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination is render", () => {
  it("renders without crashing", () => {
    const gifs = [
      {
        title: "Gif",
        url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
      },
    ];
    const pageCount = 1;
    const changePage = jest.fn();
    render(
      <Pagination gifs={gifs} pageCount={pageCount} changePage={changePage} />
    );
  });
});

import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import ListOfGifs from "./ListOfGifs";

describe("ListOfGifs is render", () => {
  it("renders without crashing", () => {
    const loading = false;
    const gifs = [
      {
        title: "Gif",
        url: "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif",
      },
    ];
    const { getByText } = render(<ListOfGifs loading={loading} gifs={gifs} />);
    expect(getByText("Gif")).toBeInTheDocument();
  });
});

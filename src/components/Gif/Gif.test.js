import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import Gif from "./Gif";

describe("Gif is render", () => {
  it("renders without crashing", () => {
    const title = "Gif";
    const url = "https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif";
    const { getByText } = render(<Gif title={title} url={url} />);
    expect(getByText(title)).toBeInTheDocument();
  });
});

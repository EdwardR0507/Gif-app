import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar is render", () => {
  it("renders without crashing", () => {
    const setCategory = jest.fn();
    render(<SearchBar setCategory={setCategory} />);
  });
});

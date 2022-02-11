import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import App from "./App";

describe("App is render", () => {
  it("renders without crashing", () => {
    render(<App />);
  });
});

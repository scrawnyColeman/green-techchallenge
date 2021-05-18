import { render, screen, cleanup } from "@testing-library/react";
import HomePage from "../pages";

afterEach(cleanup);

describe("HomePage", () => {
  it("should render", () => {
    render(<HomePage />);
    expect(screen.getByTestId("form-container")).toBeInTheDocument();
  });
});

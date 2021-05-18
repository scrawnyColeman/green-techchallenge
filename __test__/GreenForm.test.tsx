import { render, cleanup, screen } from "@testing-library/react";
import GreenForm from "../components/GreenForm";

afterEach(cleanup);

describe("GreenForm", () => {
  beforeEach(() => {
    render(<GreenForm />);
  });
  it("should render form", () => {
    expect(screen.getByTestId("form")).toBeInTheDocument();
  });
  it("should render title", () => {
    expect(screen.getByText("Operations studio")).toBeInTheDocument();
  });
  it("should render subtitle", () => {
    expect(
      screen.getByText("Please enter your email below")
    ).toBeInTheDocument();
  });
});

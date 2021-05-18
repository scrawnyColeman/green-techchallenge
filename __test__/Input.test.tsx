import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Input from "../components/Input";

afterEach(cleanup);

describe("Input", () => {
  it("should render textbox if type is text", () => {
    render(<Input name="test-input" label="test-label" />);
    expect(
      screen.getByRole("textbox", {
        name: "test-label",
      })
    ).toBeInTheDocument();
  });

  it("should render checkbox if type is checkbox", () => {
    render(<Input name="test-input" label="test-label" type="checkbox" />);
    expect(
      screen.getByRole("checkbox", {
        name: "test-label",
      })
    ).toBeInTheDocument();
  });

  it("should be checked on load if checkbox", () => {
    render(<Input name="test-input" label="test-label" type="checkbox" />);
    expect(
      screen.getByRole("checkbox", {
        name: "test-label",
      })
    ).toBeChecked();
  });

  it("should be unchecked if clicked", () => {
    render(<Input name="test-input" label="test-label" type="checkbox" />);
    const checkbox = screen.getByRole("checkbox", {
      name: "test-label",
    });

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });
});

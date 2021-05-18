import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import Button from "../components/Button/index";
import { Sizes, Variants } from "../constants/enums";

afterEach(cleanup);

const clickMock = jest.fn();

describe("Button", () => {
  it("should render", () => {
    render(<Button label="test-btn" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("should display correct text content", () => {
    render(<Button label="test-btn" />);
    expect(screen.getByRole("button")).toHaveTextContent("test-btn");
  });

  it("should be clickable", () => {
    render(<Button label="test-btn" onClick={clickMock} />);
    const btn = screen.getByRole("button");
    fireEvent.click(btn);
    expect(clickMock).toHaveBeenCalledTimes(1);
  });

  it("should have correct default classes", () => {
    render(<Button label="test-btn" />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("primaryBtn");
    expect(btn).toHaveClass("regularBtn");
  });

  it("should have correct classes with Variant and Size specified", () => {
    const customProps = {
      size: Sizes.LARGE,
      variant: Variants.SECONDARY,
    };
    render(<Button label="test-btn" {...customProps} />);
    const btn = screen.getByRole("button");
    expect(btn).toHaveClass("secondaryBtn");
    expect(btn).toHaveClass("largeBtn");
  });
});

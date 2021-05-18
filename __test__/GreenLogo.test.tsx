import { render, screen, cleanup } from "@testing-library/react";
import GreenLogo from "../components/GreenLogo";

afterEach(cleanup);

describe("GreenLogo", () => {
  it("should render", () => {
    render(<GreenLogo />);
    expect(screen.getByAltText("Green Logo")).toBeInTheDocument();
  });
});

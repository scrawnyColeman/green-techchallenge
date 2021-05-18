import { render, screen, cleanup } from "@testing-library/react";
import GreenForm from "../components/GreenForm";

afterEach(cleanup);

describe("GreenForm", () => {
  it("should render", () => {
    const { asFragment } = render(<GreenForm />);
    expect(asFragment(<GreenForm />)).toMatchSnapshot();
  });
});

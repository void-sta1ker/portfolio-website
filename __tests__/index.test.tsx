import * as React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/index";
import "@testing-library/jest-dom";

describe("Home", () => {
  beforeAll(() => {
    render(
      React.cloneElement(<Home />, {
        technologies: [],
        stats: [],
        clients: [],
        projects: [],
      })
    );
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("button", {
      name: /Download CV/i,
    });

    expect(heading).toBeInTheDocument();
  });
});

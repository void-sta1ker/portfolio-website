import * as React from "react";
import { render } from "@testing-library/react";
import Home from "../pages/index";

it("renders homepage unchanged", () => {
  const { container } = render(
    React.cloneElement(<Home />, {
      technologies: [],
      stats: [],
      clients: [],
      projects: [],
    })
  );
  expect(container).toMatchSnapshot();
});

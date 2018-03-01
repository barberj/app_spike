import React from "react";
import renderer from "react-test-renderer";

import { ReduxApp } from "./app/index";

it("renders without crashing", () => {
  const rendered = renderer.create(<ReduxApp />).toJSON();
  expect(rendered).toBeTruthy();
});

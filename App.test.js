import React from "react";
import renderer from "react-test-renderer";

import { FontLessApp } from "./app/index";

it("renders without crashing", () => {
  const rendered = renderer.create(<FontLessApp />).toJSON();
  expect(rendered).toBeTruthy();
});

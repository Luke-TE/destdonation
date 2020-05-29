import React from "react";
import { shallow, render } from "enzyme";

import Home from "./Home";

describe("Home", () => {
  it("should render correctly with no children", () => {
    const component = shallow(<Home />);

    expect(component).toMatchSnapshot();
  });
  it("should render correctly all subcomponents", () => {
    const component = render(<Home />);

    expect(component).toMatchSnapshot();
  });
});

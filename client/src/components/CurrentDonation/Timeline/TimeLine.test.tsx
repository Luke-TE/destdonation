import React from "react";
import { shallow, render } from "enzyme";

import Timeline from "./Timeline";

describe("Timeline", () => {
  it("should render correctly with no children", () => {
    const component = shallow(<Timeline />);

    expect(component).toMatchSnapshot();
  });
  it("should render correctly all subcomponents", () => {
    const component = render(<Timeline />);

    expect(component).toMatchSnapshot();
  });
});

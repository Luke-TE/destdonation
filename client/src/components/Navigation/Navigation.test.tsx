import React from "react";

// @ts-ignore
import { configure, shallow } from "enzyme";
// @ts-ignore
import Adapter from "enzyme-adapter-react-16";
// @ts-ignore
import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";

configure({ adapter: new Adapter() });
describe("<Navigation />", () => {
  it("should render three navigation links and other pages", () => {
    const wrapper = shallow(<Navigation />);
    expect(wrapper.find(NavLink)).toHaveLength(3);
  });
});

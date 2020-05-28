import React from "react";
import App from "./App";
// @ts-ignore
import { configure, shallow } from "enzyme";
// @ts-ignore
import Adapter from "enzyme-adapter-react-16";
// @ts-ignore
import { BrowserRouter } from "react-router-dom";

configure({ adapter: new Adapter() });
describe("<App />", () => {
  it("should render <BrowserRouter /> and other pages pages", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });
});

import React from "react";
import App from "./App";
// @ts-ignore
import { shallow } from "enzyme";
// @ts-ignore
import { BrowserRouter } from "react-router-dom";

describe("<App />", () => {
  it("should render <BrowserRouter /> and other pages pages", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(BrowserRouter)).toHaveLength(1);
  });
});

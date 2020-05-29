import React from "react";
import { shallow } from "enzyme";

import Footer from "./Footer";

describe("Footer", () => {
  it("should render correctly and match snapshot", () => {
    const component = shallow(<Footer />);

    expect(component).toMatchSnapshot();
  });
});

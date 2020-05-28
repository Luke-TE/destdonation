import React from "react";
import { shallow } from "enzyme";

import VisualBox from "./VisualBox";
import van from "./van.png";

describe("VisualBox", () => {
  it("should render correctly with no positioning", () => {
    const component = shallow(<VisualBox imageSrc={van} />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with set positioning", () => {
    const component = shallow(
      <VisualBox imageSrc={van} leftOffset={20} topOffset={35} />
    );

    expect(component).toMatchSnapshot();
  });
});

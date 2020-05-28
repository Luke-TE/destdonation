import React from "react";
import { shallow, render } from "enzyme";

import DailyUpdate from "./DailyUpdate";

describe("VisualBox", () => {
  it("should render correctly with weight and number of meals", () => {
    const component = shallow(<DailyUpdate foodWeight={25} numOfMeals={19} />);

    expect(component).toMatchSnapshot();
  });

  it("should render correctly with children", () => {
    const component = render(<DailyUpdate foodWeight={25} numOfMeals={19} />);

    expect(component).toMatchSnapshot();
  });
});

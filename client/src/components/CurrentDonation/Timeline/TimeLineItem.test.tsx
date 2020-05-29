import React from "react";
import { shallow, render } from "enzyme";

import TimelineItem from "./TimelineItem";

const exampleData = {
  name: "test",
  time: "21:42",
  text:
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum deleniti provident fugit. Odio, numquam dolores iure expedita facere, officia non quam voluptas quae nemo dolorum, natus repellendus modi unde eveniet?",
  link: {
    url: "https://www.example.com",
    text: "Website",
  },
  category: {
    tag: "soup kitchen",
    color: "#e17b77",
  },
};

describe("TimeLineItem", () => {
  it("should shallow render correctly with basic props", () => {
    const component = shallow(<TimelineItem data={exampleData} key={1} />);

    expect(component).toMatchSnapshot();
  });
  it("should render correctly with basic props", () => {
    const component = render(<TimelineItem data={exampleData} key={1} />);

    expect(component).toMatchSnapshot();
  });
  it("should render correctly all subcomponents", () => {
    const component1 = render(<TimelineItem data={exampleData} key={1} />);
    const component2 = render(<TimelineItem data={exampleData} key={2} />);
    const component3 = render(<TimelineItem data={exampleData} key={3} />);

    expect(component1).toMatchSnapshot();
    expect(component2).toMatchSnapshot();
    expect(component3).toMatchSnapshot();
  });
});

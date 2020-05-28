import React, { Component } from "react";
import timelineData from "./TimelineData";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

class Timeline extends Component {
  render() {
    return (
      <div className="timeline-container">
        {timelineData.map((data, index) => (
          <TimelineItem data={data} key={index} />
        ))}
      </div>
    );
  }
}

export default Timeline;

import React, { Component } from "react";
import Demo2 from "./CharityProportions";
import FloatingActionButtonZoom from "./AnalyticsTabs";

class Analytics extends Component {
  render() {
    return (
      <div className="page-content">
        <h1>Analytics</h1>
        <div style={{ float: "left" }}>
          <h2>Meals Saved</h2>
          <FloatingActionButtonZoom></FloatingActionButtonZoom>
        </div>
        <div style={{ float: "left" }}>
          <h2>CO2 Saved</h2>
          <FloatingActionButtonZoom></FloatingActionButtonZoom>
        </div>

        <Demo2 />
      </div>
    );
  }
}

export default Analytics;

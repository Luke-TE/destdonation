import React, { Component } from "react";
import Timeline from "./Timeline/Timeline";
import "./CurrentDonation.css";

class CurrentDonation extends Component {
  render() {
    // @ts-ignore
    return (
      <div className="page-content">
        <h1>CurrentDonation</h1>
        <p>Current Donation body content</p>
        <Timeline />
      </div>
    );
  }
}

export default CurrentDonation;

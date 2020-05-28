import React, { Component } from "react";
import Timeline from "./Timeline/Timeline";

class CurrentDonation extends Component {
  render() {
    // @ts-ignore
    return (
      <div>
        <h1>CurrentDonation</h1>
        <p>Current Donation body content</p>
        <Timeline />
      </div>
    );
  }
}

export default CurrentDonation;

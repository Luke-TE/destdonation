import React, { Component } from "react";
import Timeline from "./Timeline/Timeline";
import "./CurrentDonation.css";
import DailyUpdate from "../DailyUpdate/DailyUpdate";

class CurrentDonation extends Component {
  render() {
    // @ts-ignore
    return (
      <div className="page-content">
        <h1>Current Donation</h1>
        <DailyUpdate foodWeight={100} numOfMeals={200}></DailyUpdate>
        <Timeline />
      </div>
    );
  }
}

export default CurrentDonation;

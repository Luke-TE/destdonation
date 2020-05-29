import React, { Component } from "react";
import DailyUpdate from "../DailyUpdate/DailyUpdate";

class Home extends Component {
  render() {
    return (
      <div className="page-content">
        <h1>Home</h1>
        <DailyUpdate foodWeight={100} numOfMeals={200}></DailyUpdate>
      </div>
    );
  }
}

export default Home;

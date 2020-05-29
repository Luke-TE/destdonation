import React, { Component } from "react";
import DailyUpdate from "../DailyUpdate/DailyUpdate";
import Charity from "./Charities/Charity";
import CharityData from "./Charities/CharityData";

const fillerItem: {
  name: string;
  link: { url: string; text: string };
  img: string;
} = {
  name: "Charities",
  link: {
    url: "https://www.cityharvest.org.uk/",
    text: "#D6AC41",
  },
  img: "https://i.ibb.co/kgkdyPk/Screenshot-2020-05-29-at-10-50-49.png",
};
const charities = [...CharityData];
charities.splice(charities.length / 2, 0, fillerItem);

class Home extends Component {
  render() {
    // @ts-ignore
    return (
      <div className="page-content">
        <h1>Home</h1>
        <DailyUpdate />
        {charities.map((data, index) => {
          return <Charity data={data} key={index} />;
        })}
      </div>
    );
  }
}

export default Home;

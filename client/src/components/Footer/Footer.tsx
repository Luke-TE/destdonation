import React from "react";
import "./Footer.css";
import Facebook from "./facebook.svg";
import Insta from "./instagram.svg";
import Twitter from "./twitter.svg";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="rows">
          <a
            href={"https://www.cityharvest.org.uk/"}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#E1FFCB" }}
          >
            www.cityharvest.org.uk &nbsp;
          </a>
          <a href={"https://www.facebook.com/CityHarvestLondon/"}>
            <img src={Facebook} width={20} alt={""}></img>
          </a>{" "}
          &nbsp;
          <a href={"https://www.instagram.com/cityharvestlondon/?hl=en"}>
            <img src={Insta} width={20} alt={""}></img>
          </a>{" "}
          &nbsp;
          <a href={"https://twitter.com/cityharvest_ldn?lang=en"}>
            <img src={Twitter} width={20} alt={""}></img>
          </a>{" "}
          &nbsp; &copy;
          {new Date().getFullYear()} DestDonation
        </div>
      </div>
    </div>
  );
};
export default Footer;

import React, { Component } from "react";
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
          <img src={Facebook} width={20}></img> &nbsp;
          <img src={Insta} width={20}></img> &nbsp;
          <img src={Twitter} width={20}></img> &nbsp; &copy;
          {new Date().getFullYear()} DestDonation
        </div>
      </div>
    </div>
  );
};
export default Footer;

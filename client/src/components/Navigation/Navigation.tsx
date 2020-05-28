import React from "react";
// @ts-ignore
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/Analytics">Analytics</NavLink>
      <NavLink to="/Current-Donation">CurrentDonation</NavLink>
    </div>
  );
};

export default Navigation;

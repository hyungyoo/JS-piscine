import React from "react";
import "../App.css";
const moment = require("moment");

const Header = () => {
  const date = moment().format("YYYY-MM-DD");
  return (
    <div
      style={{
        backgroundColor: "gray",
        height: "70px",
      }}
    >
      <h1 className="App"> Header Site! </h1>
      <h1> hello!</h1>
      <h1> {date}</h1>
    </div>
  );
};

export default Header;

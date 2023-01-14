import { useState } from "react";
import Title from "../title/Title";

const HeaderComponent = () => {
  console.log("render()");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul className="list">
          <li className="list-items">Home</li>
          <li className="list-items">About Us</li>
          <li className="list-items">Contact Us</li>
          <li className="list-items">Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;

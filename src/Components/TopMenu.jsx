import React from "react";
import { Link } from "react-router-dom";
const TopMenu = () => {
  return (
    <div>
      <ul>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/Home">Home</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/Products">Product</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/ContactUs">Contact Us</Link>
        </li>
        <li style={{ display: "inline", padding: "5px" }}>
          <Link to="/">Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default TopMenu;

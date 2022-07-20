import React from "react";
import "./Navbar.css";
import "./QuickAcces";

const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <div className="navBarContainer">
          <h3>Central Learning</h3>

          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Groups</li>
            <li>Plans</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Navbar.css";
import Fire from "../Assests/fire.png";
import Star from "../Assests/face.png";
import Party from "../Assests/like.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>MovieManiac</h1>
      <div className=" navabar_links">
        <a href="  ">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </a>
        <a href="  ">
          Top rated <img src={Star} alt="star emoji" className="navbar_emoji" />
        </a>
        <a href="  ">
          upcoming
          <img src={Party} alt="party emoji" className="navbar_emoji" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

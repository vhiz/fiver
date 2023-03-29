import React from "react";
import "./navbar.scss";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="contanier">
        <div className="logo">
          <span>fiverr</span>
          <span>.</span>
        </div>
        <div className="links">
          <span>Fiverr Business</span>
          <span>Explore</span>
          <span>English</span>
          <span>Become a Seller</span>
          <span>Sigin In</span>
          <button>Join</button>
        </div>
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Options from "./Options";
import "./navbar.scss";

export default function Navbar({ color }) {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  const handleScroll = () => {
    setActive(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "vhiz",
    isSeller: true,
    img: "/img/vhiz.png",
  };

  const shouldShowSearch = pathname !== "/" || active;

  const shouldShowMenu = pathname !== "/" || active;

  return (
    <>
      <div
        className={`navbar ${active || pathname !== "/" ? "active" : ""}`}
        style={!active && pathname === "/" ? { backgroundColor: color } : null}
      >
        <div className="contanier">
          <div className="logo">
            <Link to={"/"} className="link">
              <span>fiverr</span>
            </Link>
            <span>.</span>
          </div>

          {shouldShowSearch && (
            <div className="search">
              <input
                type="text"
                placeholder="What Service are you looking for today"
              />
              <button>Search</button>
            </div>
          )}

          <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && <span>Sigin In</span>}
            {!currentUser && <button>Join</button>}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={currentUser.img} alt="" />
                <span>{currentUser.username}</span>
              </div>
            )}
          </div>
        </div>

        {shouldShowMenu && (
          <>
            <hr />
            <div className="menu">
              <Link className="link">
                <span>Graphics & Design</span>
              </Link>
              <Link className="link">
                <span>Digital Marketing</span>
              </Link>
              <Link className="link">
                <span>Writing & Translation</span>
              </Link>
              <Link className="link">
                <span>Video & Animation</span>
              </Link>
              <Link className="link">
                <span>Music & Audio</span>
              </Link>
              <Link className="link">
                <span>Programming & Tech</span>
              </Link>
              <Link className="link">
                <span>Photography</span>
              </Link>
              <Link className="link">
                <span>Business</span>
              </Link>
              <Link className="link">
                <span>AI Services</span>
              </Link>
            </div>
            <hr />
          </>
        )}
      </div>

      {open && <Options currentUser={currentUser} setOpen={setOpen} />}
    </>
  );
}

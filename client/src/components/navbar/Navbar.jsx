import React, { useEffect, useState } from "react";
import Options from "./Options";
import "./navbar.scss";
import { Link, useLocation } from "react-router-dom";

export default function Navbar({ color }) {
  const [active, setactive] = useState(false);
  const [open, setOpen] = useState(false);

  const { pathname } = useLocation();

  const isActive = () => {
    window.scrollY > 0 ? setactive(true) : setactive(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  // const currentUser = {
  //   id: 1,
  //   username: "vhiz",
  //   isSeller: true,
  //   img: "/img/vhiz.png",
  // };
  const currentUser = null;
  return (
    <>
      <div
        className={active || pathname !== "/" ? "navbar active" : "navbar"}
        style={
          !active && pathname === "/" ? { backgroundColor: `${color}` } : null
        }
      >
        <div className="contanier">
          <div className="logo">
            <Link to={"/"} className="link">
              <span>fiverr</span>
            </Link>
            <span>.</span>
          </div>
          {pathname !== "/" && (
            <div className="search">
              <input
                type="text"
                placeholder="What Servive are you looking for today"
              />
              <button>Search</button>
            </div>
          )}
          {active && (
            <div className="search">
              <input
                type="text"
                placeholder="What Servive are you looking for today"
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
        {pathname !== "/" && (
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
                <span>Writting & Translation</span>
              </Link>
              <Link className="link">
                <span>Video & Animation</span>
              </Link>
              <Link className="link">
                <span>Music & Audio</span>
              </Link>
              <Link className="link">
                <span>Programming & Tech Photography Business AI Services</span>
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
        {active && (
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
                <span>Writting & Translation</span>
              </Link>
              <Link className="link">
                <span>Video & Animation</span>
              </Link>
              <Link className="link">
                <span>Music & Audio</span>
              </Link>
              <Link className="link">
                <span>Programming & Tech Photography Business AI Services</span>
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
      {open && (
        <Options currentUser={currentUser} setOpen={setOpen} open={open} />
      )}
    </>
  );
}

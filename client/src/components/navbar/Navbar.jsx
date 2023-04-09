import React, { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Options from "./Options";
import "./navbar.scss";
import { AuthContext } from "../../context/authContex";
import { cards } from "../../data";

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

  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    navigate(`/app/gigs?search=${input}`);
  };

  const { currentUser } = useContext(AuthContext);

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
              <div className="searchInput">
                <input
                  type="text"
                  placeholder='Try "building a mobile app"'
                  value={input} // Set the input value to the state value
                  onChange={(e) => setInput(e.target.value)}
                />
              </div>
              <button onClick={handleSubmit}>Search</button>
            </div>
          )}

          <div className="links">
            <span>Fiverr Business</span>
            <span>Explore</span>
            <span>English</span>
            {!currentUser?.isSeller && <span>Become a Seller</span>}
            {!currentUser && (
              <Link to={"/app/login"} className="link">
                <span>Sigin In</span>
              </Link>
            )}
            {!currentUser && (
              <Link to={"/app/register"} className="link">
                <button>Join</button>
              </Link>
            )}
            {currentUser && (
              <div className="user" onClick={() => setOpen(!open)}>
                <img src={currentUser.img || "/icon/no.png"} alt="" />
                <span>{currentUser.username}</span>
              </div>
            )}
          </div>
        </div>

        {shouldShowMenu && (
          <>
            <hr />
            <div className="menu">
              {cards.map((card) => (
                <Link
                  className="link"
                  key={card.id}
                  to={`/app/gigs?cat=${card.cat}`}
                >
                  <span>{card.title}</span>
                </Link>
              ))}
            </div>
            <hr />
          </>
        )}
      </div>

      {open && <Options currentUser={currentUser} setOpen={setOpen} />}
    </>
  );
}

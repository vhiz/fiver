import React, { useState } from "react";
import "./featured.scss";
import { useNavigate } from "react-router-dom";

export default function Featured({ img, name }) {
  const navigate = useNavigate();

  const [input, setInput] = useState("");

  const handleSubmit = async () => {
    navigate(`/app/gigs?search=${input}`);
  };

  return (
    <div className="featured">
      <div className="container" style={{ backgroundImage: `url(${img})` }}>
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/icon/search.png" alt="" />
              <input
                type="text"
                placeholder='Try "building a mobile app"'
                value={input} // Set the input value to the state value
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <button onClick={handleSubmit}>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Website Design</button>
            <button>WordPress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <div className="intro">
            <span>{name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

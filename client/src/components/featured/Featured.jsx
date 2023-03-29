import React from "react";
import "./featured.scss";

export default function Featured({img,name}) {
  return (
    <div className="featured">
      <div className="contanier" style={{background:`url(${img})`}}>
        <div className="left">
          <h1>
            Find the perfect <i> freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/icon/search.png" alt="" />
              <input type="text" placeholder='Try "building a mobile app"' />
            </div>
            <button>Search</button>
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

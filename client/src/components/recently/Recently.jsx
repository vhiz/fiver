import React from "react";
import "./recently.scss";


export default function RecentlyCard({ item }) {
  return (
    <div className="recently">
      <div className="top">
        <img src={item.imgs[0]} alt="" />
      </div>
      <div className="bottom">
        <div className="user">

          <img src={item.profile} alt="" />
          <div className="useritem">
            <h2>{item.title}</h2>
            {item.level ? (
              <p>Top Rated Seller</p>
            ) : (
              <span>Level 2 Selleer</span>
            )}
          </div>
        </div>
        <div className="desc">
          <p>Lorem ipsum dolor sit amet consectetur tyututtiujkyi</p>
        </div>
        <div className="rating">
          {item.rating} <span>({item.view})</span>
        </div>
        <div className="price">
          <img src="/icon/like.png" alt="" />
          <span>STARTING AT ${item.price}</span>
        </div>
      </div>
    </div>
  );
}

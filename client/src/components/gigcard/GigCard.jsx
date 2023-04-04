import React from "react";
import "./gigcard.scss";
import { Link } from "react-router-dom";
export default function GigCard({ item }) {
  return (
    <Link to={"/app/gig/"+ item.id} className="link">
      <div className="gigCard">
        <img src={item.img} alt="" />
        <div className="info">
          <div className="user">
            <img src={item.profile} alt="" />
            <span>{item.username}</span>
          </div>
          <p>{item.desc}</p>
          <div className="star">
            <img src="/icon/star.png" alt="" />
            <span>{item.star}</span>
          </div>
        </div>
        <div className="details">
          <img src="/icon/like.png" alt="" />
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
}

import React from "react";
import { Link } from "react-router-dom";
import "./carcard.scss";
export default function CatCard({ item, handleLinkClick }) {
  return (
    <Link to={`/app/gigs?cat=${item.id}`}>
      <div className="catCard" onClick={handleLinkClick}>
        <img src={item.img} alt="" />
        <span>{item.desc}</span>
        <span>{item.title}</span>
      </div>
    </Link>
  );
}

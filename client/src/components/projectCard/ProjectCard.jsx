/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./projectcard.scss";
export default function ProjectCard({ item }) {
  return (
    <Link to={`/`} className="link">
      <div className="projectCard">
        <img src={item.img} alt="" />
        <div className="info">
          <img src={item.pp} alt="" />
          <div className="text">
            <h2>{item.cat}</h2>
            by <span>{item.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

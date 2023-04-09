/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import "./projectcard.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
export default function ProjectCard({ item }) {
  const { error, isLoading, data } = useQuery(
    ["projectUser", item],
    async () => {
      const res = await makeRequest.get(`/users/${item.userId}`);
      return res.data;
    }
  );

  console.log(data);
  return (
    <Link to={`/app/gig/${item._id}`} className="link">
      <div className="projectCard">
        <img src={item.cover} alt="" />
        {isLoading ? (
          ""
        ) : error ? (
          ""
        ) : (
          <div className="info">
            <img src={item.img || '/icon/no.png'} alt="" />
            <div className="text">
              <h2>{item.cat}</h2>
              by <span>{data.username}</span>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

export default function Options({ currentUser, setOpen, open }) {
  return (
    <div className="options">
      {currentUser?.isSeller && (
        <>
          <Link to={"/app/mygig"} className="link">
            <span onClick={() => setOpen(!open)}>Gigs</span>
          </Link>
          <Link to={"/app/add"} className="link">
            <span onClick={() => setOpen(!open)}> Add New Gig</span>
          </Link>
        </>
      )}
      <Link to={"/app/orders"} className="link">
        <span onClick={() => setOpen(!open)}>Orders</span>
      </Link>
      <Link to={"/app/messages"} className="link">
        <span onClick={() => setOpen(!open)}>Messages</span>
      </Link>
      <span>Logout</span>
    </div>
  );
}

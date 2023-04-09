/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContex";

export default function Options({ currentUser, setOpen, }) {
  const { logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/app/login");
  };
  return (
    <div className="options">
      {currentUser?.isSeller && (
        <>
          <Link to={"/app/mygig"} className="link">
            <span onClick={() => setOpen(false)}>Gigs</span>
          </Link>
          <Link to={"/app/add"} className="link">
            <span onClick={() => setOpen(false)}> Add New Gig</span>
          </Link>
        </>
      )}
      <Link to={"/app/orders"} className="link">
        <span onClick={() => setOpen(false)}>Orders</span>
      </Link>
      <Link to={"/app/messages"} className="link">
        <span onClick={() => setOpen(false)}>Messages</span>
      </Link>
      <span onClick={handleLogout}>Logout</span>
    </div>
  );
}

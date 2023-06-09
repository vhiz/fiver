import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./breadcrumbs.scss";

const Breadcrumbs = ({cat}) => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  const handleClick = (pathname) => {
    const routeTo = `/${pathname}`;
    window.history.pushState({}, '', routeTo);
  }

  return (
    <div className="breadcrumbs">
      {pathnames.length > 0 && (
        <ul>
          <li>
            <Link to="/" className="link" onClick={() => handleClick('')}>Home</Link>
          </li>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            if (pathname === "app") {
              return null;
            }
            if (pathname === "gig") {
              return null;
            }
            if (pathname.length > 15) {
              return cat || 'message';
            }
            return isLast ? (
              <li key={pathname}>{pathname}</li>
            ) : (
              <li key={pathname}>
                <Link to={routeTo} onClick={() => handleClick(routeTo)}>{pathname}</Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Breadcrumbs;

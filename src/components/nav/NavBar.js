import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "../nav/NavBar.css"

export const NavBar = ({clearUser, isAuthenticated}) => {
  const history = useHistory();

  const handleLogout = () => {
      clearUser();
      history.push("/")
  }



  return (
      <ul className="navbar">
          {isAuthenticated ?
          <li className="navlink_container">
              <Link className="navlink" to="/stitchform"> Upload </Link>
          </li> : null}
          {isAuthenticated ?
          <li className="navlink_container">
                  <Link className="navlink" to="/stitchlist"> My StitchList </Link>
          </li> : null}
          {isAuthenticated ? <li className="navlink_container">
          <span className="navlink" onClick={handleLogout}> Logout </span>
          </li> : null}
      </ul>
  );

};
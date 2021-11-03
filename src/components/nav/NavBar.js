import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "../nav/NavBar.css"

export const NavBar = ({clearUser, isAuthenticated}) => {
  const history = useHistory();

  const handleLogout = () => {
      clearUser();
  }



  return (
      <ul className="navbar">
          <img src="../images/SS-Logo.png" className="logo"/>
          {isAuthenticated ?
          <li className="uploadnav_container">
                  <Link className="navlink1" to="/stitchform"> Upload </Link>
          </li> : null}
          {isAuthenticated ?
          <li className="stitchlistnav_container">
                  <Link className="navlink2" to="/stitchlist"> StitchList </Link>
          </li> : null}
          {isAuthenticated ? <li className="logoutnav_container">
                  <Link className="navlink3" onClick={handleLogout} to="/">Logout</Link>
          </li> : null}
      </ul>
  );

};
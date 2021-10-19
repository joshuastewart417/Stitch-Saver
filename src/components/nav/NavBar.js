import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import "../nav/NavBar.css"

export const NavBar = (props) => {
  const history = useHistory();

  return (
    <nav className="navbar">
      <ul className="navlink_container">
        <li className="nav-item">
          <Link className="navlink" to="/stitchform">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="navlink" to="/stitchlist">
            My Stitch List
          </Link>
        </li>
        </ul>
      <button onClick={ () => {sessionStorage.clear(); history.push(`/login`)}}>Log out</button>
    
    </nav>
  );

};
import React from "react";
import { Link } from "react-router-dom";
import navLogo from "../assets/shared/logo.svg";
import "./Nav.css";
function Nav() {
  return (
    <nav>
      <Link to="/">
        <img className="navLogo" src={navLogo} alt="logo" />
      </Link>
      <hr className="navHR" />
      <div className="navLinkContainer">
        <Link to="/">
          <a className="navLink" href="/">
            <span className="navSpan">00</span>
            <span className="navWord">HOME</span>
          </a>
        </Link>
        <Link to="/destination/moon">
          <a className="navLink" href="/destination/moon">
            <span className="navSpan">01</span>
            <span className="navWord">DESTINATION</span>
          </a>
        </Link>
        <Link to="/crew/douglas">
          <a className="navLink" href="/crew/douglas">
            <span className="navSpan">02</span>
            <span className="navWord">CREW</span>
          </a>
        </Link>
        <Link to="/tech">
          <a className="navLink" href="/tech">
            <span className="navSpan">03</span>
            <span className="navWord">TECHNOLOGY</span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Nav;

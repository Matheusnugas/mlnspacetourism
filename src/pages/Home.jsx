import React from "react";
import './Home.css';
import Nav from "../Components/Nav";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homeWrapper">
      <Nav />
      <div className="homeContentWrapper">
          <div className="ctaWrapper">
            <p className="Homeheading5">SO, YOU WANT TO TRAVEL TO</p>
            <p className="Homeheading1">SPACE</p>
            <p className="HomebodyText">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="buttonDiv">
          <Link to="/destination/moon">
            <button>EXPLORE</button>
            </Link>
          </div>
        </div>
    </div>
  );
}

export default Home;

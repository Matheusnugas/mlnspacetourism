import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import lordMars from "../assets/destination/image-mars.png";

function DestMars() {
  return (
    <div className="destinationWrapper">
      <Nav />
      <div className="destinationContentWrapper">
        <div className="destinationCTA">
          <p className="destinationPickHeading">
            <span className="planetNumberHeading">01 </span>PICK YOUR
            DESTINATION
          </p>
          <div className="planetImgWrapper">
            <img className="planetImage" src={lordMars} alt="planetImage" />
          </div>
        </div>
        <div className="destinationInfo">
          <div className="planetLinks">
            <Link to="/destination/moon">
              <p>MOON</p>
            </Link>
            <Link to="/destination/mars">
              <p
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                }}
              >
                MARS
              </p>
            </Link>
            <Link to="/destination/europa">
              <p>EUROPA</p>
            </Link>
            <Link to="/destination/titan">
              <p>TITAN</p>
            </Link>
          </div>
          <h1 className="planetHeader1">MARS</h1>
          <p className="planetBodyText">
            Don’t forget to pack your hiking boots. You’ll need them to tackle
            Olympus Mons, the tallest planetary mountain in our solar system.
            It’s two and a half times the size of Everest!
          </p>
          <hr className="planetHR" />
          <div className="travelWrapper">
            <div className="firstTravelContainer">
              <p className="travelInfo">AVG. DISTANCE</p>
              <p className="travelDistance">225 MIL. KM</p>
            </div>
            <div className="secondTravelContainer">
              <p className="travelInfo">EST. TRAVEL TIME</p>
              <p className="travelDistance">9 MONTHS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestMars;

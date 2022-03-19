import React from "react";
import Nav from "../Components/Nav";
import "./Destination.css";
import lordTitan from "../assets/destination/image-titan.png";
import { Link } from "react-router-dom";

function DestTitan() {
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
            <img className="planetImage" src={lordTitan} alt="planetImage" />
          </div>
        </div>
        <div className="destinationInfo">
          <div className="planetLinks">
            <Link to="/destination/moon">
              <p>MOON</p>
            </Link>
            <Link to="/destination/mars">
              <p>MARS</p>
            </Link>
            <Link to="/destination/europa">
              <p>EUROPA</p>
            </Link>
            <Link to="/destination/titan">
              <p
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                }}
              >
                TITAN
              </p>
            </Link>
          </div>
          <h1 className="planetHeader1">TITAN</h1>
          <p className="planetBodyText">
            The only moon known to have a dense atmosphere other than Earth,
            Titan is a home away from home (just a few hundred degrees colder!).
            As a bonus, you get striking views of the Rings of Saturn.
          </p>
          <hr className="planetHR" />
          <div className="travelWrapper">
            <div className="firstTravelContainer">
              <p className="travelInfo">AVG. DISTANCE</p>
              <p className="travelDistance">1.6 BIL. KM</p>
            </div>
            <div className="secondTravelContainer">
              <p className="travelInfo">EST. TRAVEL TIME</p>
              <p className="travelDistance">7 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestTitan;

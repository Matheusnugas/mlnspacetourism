import React from "react";
import Nav from "../Components/Nav";
import "./Destination.css";
import ladyMoon from "../assets/destination/image-moon.png";
import { Link } from "react-router-dom";

function DestMoon() {
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
            <img className="planetImage" src={ladyMoon} alt="planetImage" />
          </div>
        </div>
        <div className="destinationInfo">
          <div className="planetLinks">
            <Link to="/destination/moon">
              <p
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                }}
              >
                MOON
              </p>
            </Link>
            <Link to="/destination/mars">
              <p>MARS</p>
            </Link>
            <Link to="/destination/europa">
              <p>EUROPA</p>
            </Link>
            <Link to="/destination/titan">
              <p>TITAN</p>
            </Link>
          </div>
          <h1 className="planetHeader1">MOON</h1>
          <p className="planetBodyText">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <hr className="planetHR" />
          <div className="travelWrapper">
            <div className="firstTravelContainer">
              <p className="travelInfo">AVG. DISTANCE</p>
              <p className="travelDistance">384,400 KM</p>
            </div>
            <div className="secondTravelContainer">
              <p className="travelInfo">EST. TRAVEL TIME</p>
              <p className="travelDistance">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestMoon;

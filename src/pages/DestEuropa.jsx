import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import ladyEuropa from "../assets/destination/image-europa.png";

function DestEuropa() {
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
            <img className="planetImage" src={ladyEuropa} alt="planetImage" />
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
              <p
                style={{
                  textDecoration: "underline",
                  textDecorationThickness: "3px",
                }}
              >
                EUROPA
              </p>
            </Link>
            <Link to="/destination/titan">
              <p>TITAN</p>
            </Link>
          </div>
          <h1 className="planetHeader1">EUROPA</h1>
          <p className="planetBodyText">
            The smallest of the four Galilean moons orbiting Jupiter, Europa is
            a winter lover’s dream. With an icy surface, it’s perfect for a bit
            of ice skating, curling, hockey, or simple relaxation in your snug
            wintery cabin.
          </p>
          <hr className="planetHR" />
          <div className="travelWrapper">
            <div className="firstTravelContainer">
              <p className="travelInfo">AVG. DISTANCE</p>
              <p className="travelDistance">628 MIL. KM</p>
            </div>
            <div className="secondTravelContainer">
              <p className="travelInfo">EST. TRAVEL TIME</p>
              <p className="travelDistance">3 YEARS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DestEuropa;

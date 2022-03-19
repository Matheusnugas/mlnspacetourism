import React from "react";
import { Link } from "react-router-dom";
import Nav from "../Components/Nav";
import msAnousheh from "../assets/crew/image-anousheh-ansari.png";

function CrewAnousheh() {
  return (
    <div className="crewWrapper">
      <Nav />
      <div className="crewContentWrapper">
        <div className="crewCTA">
          <p className="crewHeading5">
            <span className="crewNumberHeading">02</span> MEET YOUR CREW
          </p>
          <div>
            <p className="crewHeading4">FLIGHT ENGINEER</p>
            <p className="crewHeading3">ANOUSHEH ANSARI</p>
          </div>
          <p className="crewBodyText">
            Anousheh Ansari is an Iranian American engineer and co-founder of
            Prodea Systems. Ansari was the fourth self-funded space tourist, the
            first self-funded woman to fly to the ISS, and the first Iranian in
            space.{" "}
          </p>
          <div className="menuCircleContainer">
            <Link to="/crew/douglas">
              <div className="menuCircle"></div>
            </Link>
            <Link to="/crew/mark">
              <div className="menuCircle"></div>
            </Link>
            <Link to="/crew/anousheh">
              <div
                style={{ backgroundColor: "white" }}
                className="menuCircle"
              ></div>
            </Link>
            <Link to="/crew/victor">
              <div className="menuCircle"></div>
            </Link>
          </div>
        </div>
        <div className="VictorCrewImageWrapper">
          <img
            className="VictorCrewImage"
            src={msAnousheh}
            alt="victor glover"
          />
        </div>
      </div>
    </div>
  );
}

export default CrewAnousheh;

import React from "react";
import { Link } from "react-router-dom";
import spaceportImg from "../assets/technology/image-spaceport-portrait.jpg";
import mobileSpaceport from "../assets/technology/image-spaceport-landscape.jpg";
import Nav from "../Components/Nav";
import "./Tech.css";

function SpaceportTech() {
  return (
    <div className="techWrapper">
      <Nav />
      <div className="techContentWrapper">
        <div className="techCTA">
          <div className="techCTATitle">
            <p className="techNamePage">
              <span className="techNumberHeading">03</span>SPACE LAUNCH 101
            </p>
          </div>
          <div className="techButtonTextWrapper">
            <div className="techButtonWrapper">
              <Link to="/rocketTech">
                <button className="techButton">1</button>
              </Link>
              <Link to="/spaceport">
                <button className="selectedTechButton">2</button>
              </Link>
              <Link to="/spacecapsule">
                <button className="techButton">3</button>
              </Link>
            </div>
            <div className="techTextWrapper">
              <p className="techHeadingSmall">THE TERMINOLOGY</p>
              <p className="techTitle">SPACEPORT</p>
              <p className="techBodyText">
                A spaceport or cosmodrome is a site for launching (or receiving)
                spacecraft, by analogy to the seaport for ships or airport for
                aircraft. Based in the famous Cape Canaveral, our spaceport is
                ideally situated to take advantage of the Earth’s rotation for
                launch.
              </p>
            </div>
          </div>
        </div>
        <div className="techIMGWrapper">
          <img className="techImage" src={spaceportImg} alt="spaceTech" />
          <img
            className="mobileTechImage"
            src={mobileSpaceport}
            alt="spaceTech"
          />
        </div>
      </div>
    </div>
  );
}

export default SpaceportTech;

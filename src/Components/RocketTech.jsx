import React from "react";
import rocketImg from "../assets/technology/image-launch-vehicle-portrait.jpg";

function RocketTech(props) {
  return (
    <div className="techContentWrapper">
      <div className="techCTA">
        <div className="techCTATitle">
          <p className="techNamePage">
            <span className="techNumberHeading">03</span>SPACE LAUNCH 101
          </p>
        </div>
        <div className="techButtonTextWrapper">
          <div className="techButtonWrapper">
            <button className="selectedTechButton">1</button>
            <button className="techButton">2</button>
            <button className="techButton">3</button>
          </div>
          <div className="techTextWrapper">
            <p className="techHeadingSmall">THE TERMINOLOGY</p>
            <p className="techTitle">LAUNCH VEHICLE</p>
            <p className="techBodyText">
              A launch vehicle or carrier rocket is a rocket-propelled vehicle
              used to carry a payload from Earth's surface to space, usually to
              Earth orbit or beyond. Our WEB-X carrier rocket is the most
              powerful in operation. Standing 150 metres tall, it's quite an
              awe-inspiring sight on the launch pad!
            </p>
          </div>
        </div>
      </div>
      <div className="techIMGWrapper">
        <img className="techImage" src={rocketImg} alt="spaceTech" />
      </div>
    </div>
  );
}

export default RocketTech;
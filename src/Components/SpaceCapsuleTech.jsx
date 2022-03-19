import React from "react";
import capsuleImg from "../assets/technology/image-space-capsule-portrait.jpg";

function SpaceCapsuleTech(props) {
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
            <button onClick={props.techPageFunction(1)} className="techButton">
              1
            </button>
            <button onClick={props.techPageFunction(2)} className="techButton">
              2
            </button>
            <button
              onClick={props.techPageFunction(3)}
              className="selectedTechButton"
            >
              3
            </button>
          </div>
          <div className="techTextWrapper">
            <p className="techHeadingSmall">THE TERMINOLOGY</p>
            <p className="techTitle">SPACE CAPSULE</p>
            <p className="techBodyText">
              A space capsule is an often-crewed spacecraft that uses a
              blunt-body reentry capsule to reenter the Earth's atmosphere
              without wings. Our capsule is where you'll spend your time during
              the flight. It includes a space gym, cinema, and plenty of other
              activities to keep you entertained.
            </p>
          </div>
        </div>
      </div>
      <div className="techIMGWrapper">
        <img className="techImage" src={capsuleImg} alt="spaceTech" />
      </div>
    </div>
  );
}

export default SpaceCapsuleTech;

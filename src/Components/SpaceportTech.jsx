import React from "react";
import spaceportImg from "../assets/technology/image-spaceport-portrait.jpg";

function SpaceportTech(props) {
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
            <button
              onClick={props.techPageFunction(2)}
              className="selectedTechButton"
            >
              2
            </button>
            <button onClick={props.techPageFunction(3)} className="techButton">
              3
            </button>
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
      </div>
    </div>
  );
}

export default SpaceportTech;

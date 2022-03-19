import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import mrVictor from '../assets/crew/image-victor-glover.png'

function CrewVictor() {
    return ( 
        <div className="crewWrapper">
        <Nav />
        <div className="crewContentWrapper">
            <div className="crewCTA">
                <p className="crewHeading5"><span className="crewNumberHeading">04</span> MEET YOUR CREW</p>
                <div>
                <p className="crewHeading4">PILOT</p>
                <p className="crewHeading3">VICTOR GLOVER</p>
                </div>
                <p className="crewBodyText">Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.</p>
                <div className="menuCircleContainer">
                    <Link to="/crew/douglas">
                    <div className="menuCircle"></div>
                    </Link>
                    <Link to="/crew/mark">
                    <div  className="menuCircle"></div>
                    </Link>
                    <Link to="/crew/anousheh">
                    <div className="menuCircle"></div>
                    </Link>
                    <Link to="/crew/victor">
                    <div style={{backgroundColor: 'white'}} className="menuCircle"></div>
                    </Link>
                </div>
            </div>
            <div className="VictorCrewImageWrapper">
                <img className="VictorCrewImage" src={mrVictor} alt="victor glover" />
            </div>
        </div>
    </div>
     );
}

export default CrewVictor;
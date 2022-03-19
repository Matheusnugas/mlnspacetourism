import React from 'react';
import { Link } from "react-router-dom";
import Nav from '../Components/Nav';
import mrMark from '../assets/crew/image-mark-shuttleworth.png';
import './Crew.css';

function CrewMark() {
    return ( 
        <div className="crewWrapper">
            <Nav />
            <div className="crewContentWrapper">
                <div className="crewCTA">
                    <p className="crewHeading5"><span className="crewNumberHeading">02</span> MEET YOUR CREW</p>
                    <div>
                    <p className="crewHeading4">MISSION SPECIALIST</p>
                    <p className="crewHeading3">MARK SHUTTLEWORTH</p>
                    </div>
                    <p className="crewBodyText">Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.</p>
                    <div className="menuCircleContainer">
                        <Link to="/crew/douglas">
                        <div className="menuCircle"></div>
                        </Link>
                        <Link to="/crew/mark">
                        <div style={{backgroundColor: 'white'}} className="menuCircle"></div>
                        </Link>
                        <Link to="/crew/anousheh">
                        <div className="menuCircle"></div>
                        </Link>
                        <Link to="/crew/victor">
                        <div className="menuCircle"></div>
                        </Link>
                    </div>
                </div>
                <div className="MarkCrewImageWrapper">
                    <img className="MarkCrewImage" src={mrMark} alt="mark shuttlerworth" />
                </div>
            </div>
        </div>
     );
}

export default CrewMark;
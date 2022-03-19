import React from 'react';
import Nav from '../Components/Nav';
import { Link } from "react-router-dom";
import './Crew.css';
import mrDouglasImage from '../assets/crew/image-douglas-hurley.png';

function CrewDouglas() {
    return ( 
        <div className="crewWrapper">
            <Nav />
            <div className="crewContentWrapper">
                <div className="crewCTA">
                    <p className="crewHeading5"><span className="crewNumberHeading">01</span> MEET YOUR CREW</p>
                    <div>
                    <p className="crewHeading4">COMMANDER</p>
                    <p className="crewHeading3">DOUGLAS HURLEY</p>
                    </div>
                    <p className="crewBodyText">Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.</p>
                    <div className="menuCircleContainer">
                        <div style={{backgroundColor: 'white'}} className="menuCircle"></div>
                        <Link to="/crew/mark">
                        <div className="menuCircle"></div>
                        </Link>
                        <Link to="/crew/anousheh">
                        <div className="menuCircle"></div>
                        </Link>
                        <Link to="/crew/victor">
                        <div className="menuCircle"></div>
                        </Link>
                    </div>
                </div>
                <div className="DouglasCrewImageWrapper">
                    <img className="DouglasCrewImage" src={mrDouglasImage} alt="douglas hurley" />
                </div>
            </div>
        </div>
     );
}

export default CrewDouglas;
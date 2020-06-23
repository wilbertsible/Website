import React from 'react';
import profile from "../images/profile.jpg";
import Navbar from "../components/Navbar";
import {Link} from 'react-router-dom';

export const About = () => {
    return (
        <>
        <Navbar/>
        <div className="profile-body">
            <div>
                <img src={profile} alt = "" className="profile-photo"></img>
            </div>
            <p>
                Wilbert Sible is currently taking his Master’s Degree in Computer Science and Software 
                Engineering at the University of Washington Bothell. He is interested in software management, 
                artificial intelligence, big data analytics, and the internet of things. 
                He loves to solve puzzles and to tinker with things, and to see how they work.
            </p>
            <br></br>
            <p>     
                While working on his degree, he tutors college students at the Quantitative Skills Center at the University 
                of Washington Bothell, and teaches kids game development using Scratch and CodeCombat at Mighty Coders. 
                Through teaching, he can fill the gaps in his technical knowledge. He cherishes the times 
                when his students learn and get a “eureka” moment as he knows he made an impact.
            </p>
            <br></br>
            <p> 
                Before graduate school, Wilbert worked as an environmental chemist, analyzing hazardous waste in water and soil samples.
                He assisted in all the duties in the lab, including generating and processing data from other labs, and logging samples.
                He was the go-to guy when something was amiss in the lab.
            </p>
            <br></br>
            <p>
                Wilbert holds a BS in Chemistry, and a BS in Material Science and Engineering at the Ateneo De Manila University. He is also a 
                Registered Chemist in the Philippines. 
            </p>
            <br></br>
            <p>
                In his spare time, Wilbert plays Ultimate Frisbee, goes to trivia nights, and plays board games. 
                He also enjoys hanging out with his friends and family.  
            </p>
            <Link to="/About/Resume" className="button">View Resume</Link>
        </div>
        </>
    )
}

export default About;
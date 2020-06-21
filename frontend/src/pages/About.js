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
                Wilbert Sible is a student currently taking his Master’s Degree in Computer Science and Software 
                Engineering at the University of Washington Bothell. His fields of interest are in Software Management, 
                Artificial Intelligence, Big Data Analytics, and the Internet of Things. 
                He loves to solve puzzles and to tinker with things and see how they work.
            </p>
            <br></br>
            <p>     
                While working on his degree, he tutors college students at the Quantitative Skills Center at the University 
                of Washington Bothell and teaches kids game development using Scratch and CodeCombat at Mighty Coders. 
                He believes that through teaching, he will fill the gaps in his own knowledge. He cherishes the moments 
                when the students get that “eureka” moment where everything just clicks in their heads because, at that moment, 
                he has made an impact in their lives.
            </p>
            <br></br>
            <p> 
                Before graduate school, Wilbert worked as an environmental chemist analyzing hazardous waste in water and soil samples in 
                Las Vegas, Nevada. He is the guy to call when something is amiss with anything in the lab. He assisted in all the duties 
                in the lab, including processing data coming from other labs, logging-in samples, generating reported data and a lot more.
            </p>
            <br></br>
            <p>
                Wilbert holds a BS in Chemistry, and a BS in Material Science and Engineering at the Ateneo De Manila University. He is also a 
                Registered Chemist in the Philippines. 
            </p>
            <br></br>
            <p>
                In his spare time, Wilbert plays Ultimate Frisbee, goes to trivia nights, and plays board games with friends and family. 
                He enjoys going out with friends to just get drinks and listen to everybody’s day-to-day adventures.  
            </p>
            <Link to="/about/resume" className="button">View Resume</Link>
        </div>
        </>
    )
}

export default About;
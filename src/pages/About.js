import React from 'react'
import Portrait from "../images/Portrait.jpg"

export const About = () => {
    return (
        <>
        <div className="profile-description">
            <h1>Wilbert Sible</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in 
                voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non Sroident, sunt in 
                culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div>
            <img src={Portrait} alt = "" className="profile-photo"></img>
        </div>
        </>
    )
}

export default About;
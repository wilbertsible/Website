import React from 'react';
import HomeNavbar from "../components/HomeNavbar";


export const Home = () => {
    return (
        <>
        <HomeNavbar />
        <div className="homepage-background">
            <div className="hero">
                <h1 className="name">Wilbert Sible</h1>
                <h2 className="description">Software Developer. Chemist. Materials Engineer.</h2>
                <h2 className="description">Teacher. Student. Philosopher.</h2>
            </div>
        </div>
        </>
    )
}

export default Home;
import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import SocialMedia from "../components/SocialMedia";



export const Home = () => {
    return (
        <>
        <Navbar />
        <Banner />
        <div className="homepage-background">
        </div>
        <SocialMedia />

        </>
    )
}

export default Home;
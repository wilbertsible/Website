import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";



export const Home = () => {
    return (
        <>
        <Navbar />
        <Banner />
        <div className="homepage-background">
        </div>
        </>
    )
}

export default Home;
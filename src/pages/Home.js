import React from 'react';
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Footer from "../components/Footer";



export const Home = () => {
    return (
        <>
        <Navbar />
        <Banner />
        <div className="homepage-background">
        </div>
        <Footer />

        </>
    )
}

export default Home;
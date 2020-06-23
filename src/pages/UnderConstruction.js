import React from 'react'
import Navbar from "../components/Navbar";

export const UnderConstruction = () => {
    return (
        <>
        <Navbar />
        <div className="construction-background" />
        <div className = "banner construction-banner">
            <h1 className="name construction-name">UNDER CONSTRUCTION</h1>
            <h3 className="description">Content coming soon...</h3>
        </div>
        </>
    )
}

export default UnderConstruction;
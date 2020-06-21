import React, { Component } from 'react'
import {FaAlignJustify} from 'react-icons/fa'
import {Link} from 'react-router-dom';

export default class Navbar extends Component {
    state={
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <>
            <nav className ="navbar">
                <div className="nav-header">
                    <Link to="/" className="brand">Wilbert Sible</Link>
                    <button type="button" className="nav-btn" onClick={this.handleToggle}>
                        <FaAlignJustify className="nav-icon"/>
                    </button>
                </div>
                <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                    <li>
                        <Link to="/About">About</Link>
                        <Link to="/Blogs">Blogs</Link>
                        <Link to="/Projects">Projects</Link>
                        <Link to="/Blogs">Contact</Link>
                    </li>
                </ul>
            </nav>

            </>
        )
    }
}

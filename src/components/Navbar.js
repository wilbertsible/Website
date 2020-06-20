import React, { Component } from 'react'
import {FaAlignJustify,FaLinkedin} from 'react-icons/fa'
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
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/blogs">Blogs</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/blogs">Contact</Link>
                    </li>
                </ul>
            </nav>

            </>
        )
    }
}

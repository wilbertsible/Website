import React, { Component } from 'react'

import {Link} from "react-router-dom";

export default class HomeNavbar extends Component {
    render() {
        return (
            <div className ="navbar">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/About">ABOUT</Link></li>
                    <li><Link to="/Resume">RESUME</Link></li>
                    <li><Link to="/Blogs">BLOGS</Link></li>
                    <li><Link to="/Contact">CONTACT</Link></li>
                </ul>
            </div>
        )
    }
}

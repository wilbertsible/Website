import React, { Component } from 'react'
import {FaLinkedin, FaTwitterSquare, FaFacebookSquare, FaGithubSquare, FaInstagramSquare} from 'react-icons/fa'

export default class SocialMedia extends Component {
    render() {
        return (
            <>
            <div className="social-media">
            <a href="https://www.linkedin.com/in/wilbertsible/"><FaLinkedin className="social-icon"></FaLinkedin></a>
            <a href="https://github.com/wilbertsible"><FaGithubSquare className="social-icon"></FaGithubSquare></a>
            <a href="https://www.facebook.com/wilbert.sible/"><FaFacebookSquare className="social-icon"></FaFacebookSquare></a>
            <a href="https://www.instagram.com/wilbertsible/"><FaInstagramSquare className="social-icon"></FaInstagramSquare></a>
            </div>
            </>
        )
    }
}


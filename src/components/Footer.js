import React, { Component } from 'react'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'
import { MdMail } from "react-icons/md";

export default class Footer extends Component {
    render() {
        return (
            <>
            <div className="social-media">
            <a href="https://www.linkedin.com/in/wilbertsible/"><FaLinkedin className="social-icon"></FaLinkedin></a>
            <a href="https://github.com/wilbertsible"><FaGithubSquare className="social-icon"></FaGithubSquare></a>
            <a href="mailto:wilbertsible@gmail.com"><MdMail className="social-icon"></MdMail></a>
            </div>
            </>
        )
    }
}


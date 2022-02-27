import React from 'react'
import linkedin from "../../Images/linkedin.png"
import github from "../../Images/github.png"
import mail from "../../Images/mail.png"
import cv from "../../Images/cv.png"
import resume from "../../Images/Siger MA-Resume.pdf"

function Icon1() {
    return (
        <a className="icon-link1" href="https://www.linkedin.com/in/siger-ma/">
            <img className="linkedin" src={linkedin} alt=""></img>
        </a>
    )
}

function Icon2() {
    return (
        <a className="icon-link2" href="https://github.com/sigerma88">
                <img className="github" src={github} alt=""></img>
        </a>
    )
}

function Icon3() {
    return (
        <a className="icon-link3" href={'mailto:siger.ma@mail.mcgill.ca'}>
                <img className="mail" src={mail} alt=""></img>
        </a>
    )
}

function Icon4() {
    return (
        <a className="icon-link4" href={resume}>
                <img className="cv" src={cv} alt=""></img>
        </a>
    )
}

export {Icon1, Icon2, Icon3, Icon4}
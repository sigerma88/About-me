import React from 'react'
import linkedin from "../../Images/img_24873.png"
import github from "../../Images/github.png"
import mail from "../../Images/mail.png"

function Icons() {
    return (
        <><a className="icon-link1" href="https://www.linkedin.com/in/siger-ma/">
            <img className="linkedin" src={linkedin} alt=""></img>
        </a>
        <a className="icon-link2" href="https://github.com/sigerma88">
                <img className="github" src={github} alt=""></img>
        </a>
        <a className="icon-link3" href={'mailto:siger.ma@mail.mcgill.ca'}>
                <img className="mail" src={mail} alt=""></img>
        </a>
        </>
    )
}

export default Icons
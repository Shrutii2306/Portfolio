import React from "react";
import mail_light from '../../images/mail_light.png';
import about_light from '../../images/about_light.png';
import linkedin_light from '../../images/linkedin_light.png';
import github_light from '../../images/github_light.png';
import project_light from '../../images/project_light.png';
import light_mode from '../../images/light_mode.svg';
export default function NavBar () {

    return (

        <nav className="navbar border-body navbar-css" data-bs-theme="dark" >

  <div className="container-fluid container-fluid-small">
    <div className="navbar-email-div">
    <a  href="mailto:shrutisingh2366@gmail.com"><img src={mail_light} className="icons_light"/>sshrutissingh2002@gmail.com</a>

    </div>
    
    <div className="right-menu right-menu-small">
        <div className="right-menu-option" >
        <a className="nav-link " href="#about-heading"><img src={about_light} className="icons_light"/><span className="menu-text" >About</span></a>
        </div>
        <div className="right-menu-option">
        <a className="nav-link" href="https://www.linkedin.com/in/shruti-singh-a172931b8/"><img src={linkedin_light} className="icons_light"/><span className="menu-text">LinkedIn</span></a>
        </div>
        <div className="right-menu-option">
        <a className="nav-link" href="#redirect_projects"><img src={project_light} className="icons_light"/><span className="menu-text">Projects</span></a>
        </div>
        <div className="right-menu-option">
        <a className="nav-link" href="https://github.com/Shrutii2306/"><img src={github_light} className="icons_light"/><span className="menu-text">Github</span></a>
        </div>
        <div className="dark-mode-btn">
            <img src={light_mode} className="icons_light"/>
        </div>
    </div>
  </div>

  
</nav>
    )
}
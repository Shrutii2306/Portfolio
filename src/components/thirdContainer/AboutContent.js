import React from 'react'
import Resume from '../../data/Resume.pdf';
import about_image from '../../images/about_image.png';
import bubble1 from '../../images/bubble1.svg';
import bubble2 from '../../images/bubble2.svg';
import bubble3 from '../../images/bubble3.svg';
export default function () {
  return (
    <div className='about-content'>
<img src={about_image} className='content-image'/>
<div className='about-text'>
        <p >Hello, I'm Shruti Singh, a passionate and enthusiastic postgraduate student pursuing a <br></br>Master of Computer Applications (MCA). As a fresh graduate with a hunger for innovation and a penchant for problem-solving, I am eager to explore opportunities that allow me to apply my skills and contribute to cutting-edge software projects. Additionally, my practical experiences and personal 
coding projects have allowed me to apply theoretical knowledge to real-world scenarios.<br></br><br></br>

This portfolio website serves as a window into my technical abilities, showcasing the projects I have undertaken and the skills I have honed along the way. Whether it's web development, 
or mobile applications, I am driven by a passion for creating efficient, elegant, and user-centric software.
<br></br><br></br>
I am excited to connect with professionals in the field, collaborate on exciting projects, and continue my journey of growth as a software developer. Feel free to browse through my projects and connect with me through the provided contact information. Let's build innovative solutions together!

</p>
</div>
    <a href={Resume} download='Shruti_Singh' target='_blank'>
        <button className='resume-btn'>
            DOWNLOAD RESUME
        </button>
    </a>
    <img src={bubble1} className='bubble1'/>
    <img src={bubble2}
    className='bubble2' />
    <img src={bubble3}
    className='bubble3'/>
    </div>
  )
}

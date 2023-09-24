import React from 'react'
import instagram_light from '../../images/instagram_light.png';
import linkedin_light from '../../images/linkedin_light.png'
import mail_light from '../../images/mail_light.png'
import github_light from '../../images/github_light.png'

export default function SideIcons() {
  return (
    <div className='side-icons'>
        <a href='https://www.linkedin.com/in/shruti-singh-a172931b8/'><img src={linkedin_light} className='contact-icon'/></a>
        <a ><img src={mail_light} className='contact-icon-active'/></a>
        <a href='https://github.com/Shrutii2306/'><img src={github_light} className='contact-icon'/></a>
        <a href='https://instagram.com/_shruuuuutiii_?igshid=NzZlODBkYWE4Ng=='><img src={instagram_light} className='contact-icon'/></a>
    </div>
  )
}

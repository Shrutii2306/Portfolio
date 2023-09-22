import React from 'react'
import Vectorabout_image from '../../images/Vectorabout_image.png'
import about_image_border from '../../images/about_image_border.svg'
export default function MiddleImage() {
  return (
    <div>
        <img src={Vectorabout_image} 
        className='about-image'/>
        <img src= {about_image_border} className='about-image-border'/>
    </div>
    
  )
}

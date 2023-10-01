import React from 'react'
import Resume from '../../data/Resume.pdf';
export default function LinkButtons() {
  return (
    <div className='link-buttons'>
        <a href='#CONTACT'>
            <button className='row5-btn'>CONTACT ME!</button>
        </a>
        <a href={Resume} target='_blank' title='Shruti Singh' >
            <button className='resume-btn-main'>
               DOWNLOAD RESUME
            </button>
        </a>
    </div>
  )
}

import React from 'react'
import bookmark from '../../images/bookmark.png';
import Resume from '../../data/Resume.pdf';
export default function ResumeBtn() {
  return (
    <a href={Resume} target='_blank' title='Shruti Singh' className='resume-link-div'>
    <div className='resume-div'>
        <img src={bookmark} className='resume' />
        <div className='resume-title'>RESUME</div>
    </div>
    </a>
  )
}

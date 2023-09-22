import React from 'react'
import ProgressBar from './Progress Bar/ProgressBar'
import Skills from '../../data/Skills'
export default function SkillsContainer() {
  return (
    <div className='skills-container'>
        <span style={{ fontSize:'1.5rem',fontWeight:600}}>MY PROFESSIONAL SKILLS</span> 
        <ProgressBar skills={Skills}/>
        </div>
    
  )
}

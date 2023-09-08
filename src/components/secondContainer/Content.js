import React from 'react'
import Mainproject from './Mainproject'
import MiniProjects from './MiniProjects'
import majorProjects from '../../data/majorProjects';
import miniProjects from '../../data/miniProjects';
export default function content() {


  return (
    <div className='middle-data' id='redirect_projects'>
      <Mainproject projectDetails={majorProjects} />
      <MiniProjects projectDetails={miniProjects}/>
    </div>
  )
}

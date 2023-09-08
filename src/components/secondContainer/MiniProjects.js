import React from 'react'
import link_icon_dark from '../../images/link_icon_dark.png';
import link_icon_light from '../../images/link_icon_light.png';
import link_icon from '../../images/link_icon.png'
export default function MiniProjects({projectDetails}) {
 const displayProject = (
    <div className="mini-project-container">
      {projectDetails.map((project, index) => (
        <div className="mini-proj-div" key={index}>
          <div className="col">
            <div class="card">
              <div className='image-container'>
                <a href={project.site}>
              <img src={project.pimg} className="card-img-top" alt="..."/>
              <div className='link-icon'><img src={ project.theme=='light'? link_icon_dark : link_icon_light } alt="link" className='link-icon-img'/></div>
              </a>
              </div>
              <div className="card-body">          
                <h5 className="card-title">{project.title}</h5>
                  <a href={project.github} className="card-text">Github -{`>`}</a>
              </div>
            </div>
          </div>
          <div className='mini-proj-number'>{project.id}</div>
        </div>
        
      ))}
    </div>
  );
  
  return (
    <div>{displayProject}</div>
  )
}

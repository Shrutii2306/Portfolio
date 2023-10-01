import React from 'react'
import link_icon_dark from '../../images/link_icon_dark.png';
import link_icon_light from '../../images/link_icon_light.png';
import link_icon from '../../images/link_icon.png'
export default function MiniProjects({projectDetails}) {
 const displayProject = (
    <div className="mini-project-container">
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
      {projectDetails.map((project, index) => (
        
          <div className={project.id ==3 ? "carousel-item active" : "carousel-item"} key={index}>
            <div className="card">
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
          <div className='mini-proj-number'>{project.id}</div>

          
        </div>

        
      ))}
     
    </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

  );
  
  return (
    <div>{displayProject}</div>
  )
}

import React from 'react'
export default function Mainproject({projectDetails,pimage}) {
  console.log(projectDetails, pimage);

  const displayUser = (
    <div className="major-project-container">

      {projectDetails.map((project, index) => (
        <div className="project-container" key={index}>
          <div className='project-image-container'>
          <img src={project.pimg} alt="" className="main-project-image"/>
          <div className='major-project-number'>{project.id}</div>
          </div>
          <div className="project-Detail">
            <div className="major-proj-name">{project.title}</div>
            <div className="project-desc">{project.desc}</div>
            <div className='main-proj-github-link'><a href={project.github}>Github -{'>'}</a></div>
          </div>
        </div>
      ))}

    </div>
  );

return (
    <div>
      {displayUser}
    </div>
  )
}

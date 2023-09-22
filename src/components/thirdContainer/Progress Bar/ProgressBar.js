import React from 'react'
import '../Progress Bar/ProgressBar.css'
import {motion} from 'framer-motion';
export default function ProgressBar({skills}) {
  return (
    <div className='skill-container'>
            {skills.map((skill, index) => (
              <div key={index}>
                <div className='progressbar-container'>
                  <div className='skill-name'>{skill.title}</div>
          <div className='progressbar'>
            
            <motion.div 
            whileInView={{
            
                width:`${skill.score}%`,
                animate:{ x: 100 },
                transition:{ ease: "easeOut", duration: 2 }
            }}
            className='bar'
            />

        </div>
        </div>
                </div>
            ))}
          
          
    </div>
  )
}

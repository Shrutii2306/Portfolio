import React from 'react'
import photo from '../../images/photo.png';
export default function MainPhoto() {
  return (
    <>
    <div className='photo-position'>
        <div className='outer-circle'>
            <div className='inner-circle'>
                <img src={photo} className='photo'/>
            </div>

        </div>
    </div>
    </> 
)
}

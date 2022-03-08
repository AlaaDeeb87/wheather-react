import React from 'react'
import './Home.css'

import spaceVideo from '../images/space.mp4'

export const Action3 = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
    </video>
    </div>
  )
}

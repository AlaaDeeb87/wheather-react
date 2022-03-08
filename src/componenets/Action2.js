import React from 'react'
import './Home.css'

import spaceVideo from '../images/water4.mp4'

export const Action2 = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
    </video>
    </div>
  )
}

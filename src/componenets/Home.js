import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import './Home.css'

import spaceVideo from '../images/animal.mp4'

export const Home = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
    </video>
    <div className='content'>
        <h1>Welcome to my website</h1>
        <div>
            <Link to='/weather' className='btn btn-light'>Weather</Link>
            <Link to='/contact' className='btn btn-light'>Contact</Link>
            <Link to='/gallery' className='btn btn-light'>Gallery</Link>
        </div>
    </div>
</div>
  )
}

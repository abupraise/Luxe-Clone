import React from 'react'
import './Hero.css'
import right from '../assets/image (1).png'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='left-side'>
        <div className='text'>
          <p className='greetings'>Hi there</p>
          <h1 className='introduction'><span>LUXE</span> IS HERE TO BE YOUR ASSISTANT</h1>
          <p>I am here ready to help</p>
        </div>
        <button className='btn'>Let's Discuss</button>
      </div>
      <div className='right-side'>
        <img src={right} alt="" />
      </div>
    </div>
    )
}

export default Hero
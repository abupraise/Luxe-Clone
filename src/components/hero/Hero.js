import React from 'react'
import './Hero.css'
import right from '../assets/image (1).png'

const Hero = () => {
  return (
    <div className='hero-section'>
      <div className='left-side'>
        <div className='text'>
          <p className='hello-text'>Hi there!</p>
          <h1 className='intro-text'><span>LUXE </span>IS HERE TO BE YOUR ASSISTANT</h1>
          <p>I am here ready to help you in making creative digital products</p>
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
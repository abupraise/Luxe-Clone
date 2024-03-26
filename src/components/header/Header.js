import React from 'react'
import './Header.css'
import logo from '../assets/Luxe.png'
import burger from '../assets/Menu.png'

const Header = () => {
  return (
        <nav className='navbar'>
          <div className='logo'>
            <img src={logo} alt='logo'/>
          </div>
          <div className='navigation'>
            <ul>
          <li>Home</li>
          <li>Service</li>
          <li>Portfolio</li>
          <li>How We Work</li>
          </ul>
          </div>
          <div className='hamburger'>
            <img src={burger} />
          </div>
        </nav>
  )
}

export default Header

import React from 'react'
import './Header.css'
import luxe from '../assets/Luxe.png'
import burger from '../assets/Menu.png'

const Header = () => {
  return (
        <nav className='navbar'>
          <div className='logo'>
            <img src={luxe} alt=''/>
          </div>
          <div className='navigation'>
            <ul>
          <li><a>Home</a></li>
          <li><a>Service</a></li>
          <li><a>Portfolio</a></li>
          <li><a>How We Work</a></li>
          </ul>
          </div>
          <div className='hamburger'>
            <img src={burger} />
          </div>
        </nav>
  )
}

export default Header

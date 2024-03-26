import React from 'react'
import './Service.css'
import branding from '../assets/Branding.png'
import ui_ux from '../assets/Ui Design.png'
import product from '../assets/Product.png'
const service = () => {
  return (
    <div className='service'>
        <h1>OUR SERVICES</h1>
        <div className='wrapper'>
            <div className='card1'>
                <img src={branding} />
                <h3>Branding</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
            <div className='card1 card2'>
                <img src={ui_ux}/>
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
            </div>
        <div className='card1 card3'>
            <img src={product} />
            <h3>Branding</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        </div>
    </div>
    )
}

export default service
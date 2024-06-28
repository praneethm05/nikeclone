import React from 'react'
import shoe from './shoe.jpg'
import './componentstyle.css'

export default function Home() {
  return (
    <div>
         <div className="image-container">
         <img src={shoe} className='shoe'></img>
         <h2 className='tagline'>DONT WASTE
             YOUR ENERGY</h2>

         </div>
      
     
    </div>
  )
}

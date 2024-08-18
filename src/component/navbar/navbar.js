import React from 'react'
import "./navbar.css"
import {Link } from "react-router-dom"
import flowerimg from "./navbar-img.avif"

function navbar() {
  return (

    <div className='navbar'>

      <img src={flowerimg} style={{height:40}}/>
       <span className='brand-name'  >  desserts</span> 

        <div className='navbar-link'>

         <Link to="/"  className='link'> 
         Home
         </Link>

         <Link to='/about' className='link'>
         About
         </Link>

         

        </div>
    </div>
  )
}

export default navbar
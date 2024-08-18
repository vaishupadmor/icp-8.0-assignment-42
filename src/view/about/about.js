import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import aboutimg from "./../about/about.jpg"
import Footer from "./../../component/footer/footer"
import {Staffinfo} from "./../../component/foodcard/foodcard"
import { PERSONS,MAIN_NAMES ,TAG_LINES ,THEME} from './../../config/data1'

function about() {
  return (
    <div>
      <Navbar/>
        <h1 className='heading-1'> about</h1>
        <img src={aboutimg} className='images-1'/>
       

        <div >
        <h1 className='food-title' style={{color:THEME.highlight , padding:0 , margin:0}}> {MAIN_NAMES}</h1>
        <p className='food-tagline'>{TAG_LINES}</p>
     
        <div className='food-card-container'>  

     { PERSONS.map((foodItem)=>{

     return <Staffinfo
        imgUrl={foodItem.imgUrl}
         title={foodItem.title}
         description={foodItem.description}


         
         
    />
  })
}
    </div>
    </div>
  

        <Footer/>

    </div>
  )
}

export default about
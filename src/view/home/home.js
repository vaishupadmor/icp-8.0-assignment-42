import React from 'react'
import Navbar from "./../../component/navbar/navbar"
import homeimg from "./../home/home.avif"
import Foodcard from "./../../component/foodcard/foodcard"
import Footer from "./../../component/footer/footer"
import "./home.css"
import { PRODUCTS,MAIN_TITLE ,TAG_LINE ,THEME} from '../../config/data'


function home() {
  return (
    <div>
        <Navbar/>
        
        <h1 className='heading'>home</h1>
        <img src={homeimg} className='images'/>
        
        
    
    <div >
        <h1 className='food-title' style={{color:THEME.main , padding:0 , margin:0}}> {MAIN_TITLE}</h1>
        <p className='food-tagline'>{TAG_LINE}</p>
     
        <div className='food-card-container'>  

     { PRODUCTS.map((foodItem)=>{

     return <Foodcard
        imgUrl={foodItem.imgUrl}
         title={foodItem.title}
         description={foodItem.description}
         
         price={foodItem.price}
    />
  })
}
    </div>
    </div>
  



        
        <Footer/>
    </div>
  )
}

export default home
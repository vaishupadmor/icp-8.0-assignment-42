import React from 'react'
import "./home.css"
import Foodcard  from '../../component/foodcard'
import { PRODUCTS,MAIN_TITLE ,TAG_LINE ,THEME} from '../../config/data'
function home() {
  return (
    
    <div >
        <h1 className='food-title' style={{color:THEME.highlight , padding:0 , margin:0}}> {MAIN_TITLE}</h1>
        <p className='food-tagline'>{TAG_LINE}</p>
     
        <div className='food-card-container'>  

     { PRODUCTS.map((foodItem)=>{

     return <Foodcard
        imgUrl={foodItem.imgUrl}
         title={foodItem.title}
         description={foodItem.description}
         isveg={foodItem.isveg}
         price={foodItem.price}
    />
  })
}
    </div>
    </div>
  
)}
export default home
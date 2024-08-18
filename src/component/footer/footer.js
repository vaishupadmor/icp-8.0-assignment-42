import React from 'react'


const footerstyle=
{
  
    backgroundColor: "black",
    color: "white",
    textAlign: "center",
    padding: "6",
    position: "fixed",
    indexZ:1,
    bottom: "0",
    margin:"0",
    padding:"0",
    width:"100%" 
  
}
function footer() {
  return (
    <div className='footer'>
        <h1 style={footerstyle}>
All Right Reserved &copy :2024
        </h1>
    </div>
  )
}

export default footer
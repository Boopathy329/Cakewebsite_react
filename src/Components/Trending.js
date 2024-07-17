import React from 'react'
import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

function Trending () {
  return (
    <div>
        <h2 style={{marginLeft:"30px",marginTop:"30px"}}>Trending Now</h2>
        <p style={{marginLeft:"30px"}}>CAKE IN VOGE</p>
         <hr></hr>
        

        <Carousel className='img_cards' >
      <Carousel.Item className='card_1' >
         <Image src="./v-1.webp"  style={{paddingTop:"5px"}} rounded /> 
         <Image src="./v-2.webp" rounded/>  
         <Image src="./v-3.jpg" rounded /> 
                      <hr></hr>
      
      </Carousel.Item>
      
      
       
    </Carousel>  
  
    </div>
  )
}

export default Trending
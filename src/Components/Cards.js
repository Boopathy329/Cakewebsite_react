import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function Cards () {
  return (

    <div>
    <h2 style={{marginLeft:"30px",marginTop:"30px"}}>Cakes for everyday Occasion</h2>
    <p style={{marginLeft:"30px"}}>All you need is love and some cake!</p>
    <Carousel className='img_cards'>
      <Carousel.Item style={{marginLeft:"80px"}} >
         <Image src="./card-1.jpg" style={{padding:"10px",width:"250px"}}  rounded /> 
         <Image src="./card-2.webp" style={{padding:"10px",width:"250px"}}  rounded/>  
         <Image src="./card-3.webp" style={{padding:"10px",width:"250px"}} rounded />  
         <Image src="./card-4.webp" style={{padding:"10px",width:"250px"}} rounded/>  
         <Image src="./card-6.jpg" style={{padding:"10px",width:"250px"}} rounded/>      
      </Carousel.Item>
      <Carousel.Item style={{marginLeft:"80px"}} >
      <Image src="./card-6.jpg"   style={{padding:"10px",width:"250px"}}rounded/> 
      <Image src="./card-7.webp"  style={{padding:"10px",width:"250px"}}rounded /> 
      <Image src="./card-8.webp"  style={{padding:"10px",width:"250px"}}rounded /> 
      <Image src="./card-9.webp"  style={{padding:"10px",width:"250px"}} rounded/> 
      <Image src="./card-4.webp"  style={{padding:"10px",width:"250px"}} rounded/> 
    
      </Carousel.Item>
      <Carousel.Item style={{marginLeft:"80px"}} >
      <Image src="./card-11.webp" style={{padding:"10px",width:"250px"}} rounded /> 
      <Image src="./card-12.webp" style={{padding:"10px",width:"250px"}} rounded /> 
      <Image src="./card-13.webp" style={{padding:"10px",width:"250px"}} rounded /> 
      <Image src="./card-14.jpg"  style={{padding:"10px",width:"250px"}}rounded /> 
      <Image src="./card-2.webp"  style={{padding:"10px",width:"250px"}} rounded/> 
     
      </Carousel.Item>
           
       
    </Carousel>
    </div>
  );
}

export default Cards;
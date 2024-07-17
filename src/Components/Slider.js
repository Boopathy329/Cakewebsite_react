import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


function Slider () {
  return (

    <div>
    <h2  style={{marginLeft:"30px",marginTop:"30px"}}>Sweet Indulgence</h2>
    <p style={{marginLeft:"30px"}}>Mouthwatering Delights to Elevate Every Occasion</p>
    <Carousel style={{margin:"40px"}}>
      <Carousel.Item>
       <Image src="./cakes-1.webp" rounded />    
       <Image src="./cakes-2.webp" rounded  />
        <Image src="./cakes-3.webp" rounded />
        <Image src="./cakes-4.webp" rounded />
        <Image src="./cakes-6.webp" rounded />
        <Image src="./cakes-8.webp" rounded />
        <Image src="./cakes-10.webp" rounded />
      </Carousel.Item>
      <Carousel.Item>
       <Image src="./cakes-7.webp" rounded />
       <Image src="./cakes-8.webp" rounded />
       <Image src="./cakes-9.webp" rounded />
       <Image src="./cakes-10.webp" rounded />
       <Image src="./cakes-11.webp" rounded />
       <Image src="./cakes-3.webp" rounded />
    <Image src="./cakes-2.webp" rounded />      
      </Carousel.Item>
       
    </Carousel>
    </div>
  );
}

export default Slider;

import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { FaStarHalfAlt } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

function Testimonial() {
  return (
    <>
    <div>
         <h2 style={{marginLeft:"30px",marginTop:"30px"}}>Customer Stories</h2>
         <p style={{marginLeft:"30px"}}>(Rated 4.8/5 based on 133769 ratings)</p>

      <Carousel style={{ backgroundColor: "#6495ED", margin:"20px", padding: "30px" }}>
             <Carousel.Item className='box_1'>
          <Carousel.Caption>
            <img className='testimonial' src='./review-1.jpg' alt=''></img> <br></br>
            <h3 style={{color:"yellow",fontSize:"18px"}}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />

            </h3>
            <p style={{ fontSize: "20px" }}>The delivery partner is very gentle and smiling.
              Thanks for the service  IGP rendering thru him.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='box_1'>

          <Carousel.Caption>
            <img className='testimonial' src='./review-2.jpg' alt=''></img>  <br></br>

            <h3 style={{color:"yellow",fontSize:"18px"}}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt /></h3>
            <p style={{ fontSize: "20px" }}>The delivery partner is very gentle and smiling. I wish him a greate success in his life.
              </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className='box_1'>

          <Carousel.Caption>
            <img className='testimonial' src='./cakes-2.webp' alt=''></img>  <br></br>

            <h3 style={{color:"yellow",fontSize:"18px"}}>
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
            </h3>
            <p style={{ fontSize: "20px" }}> I wish him a greate success in his life.
              Thanks for the service  IGP rendering thru him.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
       {/* <img src='./input.webp' style={{backgroundColor:"#708090",width:"100%",height:"auto",text:"  <h2>Newsletters Updates</h2>"}}>
       </img> */}

     </>
  )
}

export default Testimonial
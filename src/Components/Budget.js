import React from 'react'

function Budget() {
  return (
    <>
      <div>
        <h2 style={{ marginLeft: "30px", marginTop: "30px" }}>Budget Buys</h2>
        <p style={{ marginLeft: "30px" }}>Pocket friendly treats</p>
        {/* <Carousel>
      <Carousel.Item >
         <Image src="./u-1.webp" rounded /> 
         <Image src="./u-2.webp"  rounded/>  
         <Image src="./u-3.webp" rounded />      
      </Carousel.Item>   
        </Carousel> */}
        <div className='fluid' style={{margin:"auto"}}>
          <img src='./u-1.webp' style={{width:"350px",paddingLeft:"20px"}}  ></img>
          <img src='./u-2.webp'  style={{width:"350px",paddingLeft:"20px"}} ></img>
          <img src='./u-3.webp'  style={{width:"300px",paddingLeft:"40px"}} ></img>
        </div>
      </div>
      <div>
        <img src='./bg-1.webp' className='img-fluid' style={{ marginTop: "20px", marginBottom: "20px" }}></img>
      </div>

    </>
  )
}

export default Budget
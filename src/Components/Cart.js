import React from 'react'
import { useState } from 'react'
// import { MdRoundedCorner } from 'react-icons/md'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
// import Mainpage from './Mainpage'


const images = [ 
 
  "./v-3.jpg",
  "./v-9.jpg",
  "./v-5.jpg",
  "./v-6.webp",
  "./v-7.webp",
  "./v-4.webp",
  "./v-8.webp",
  "./v-2.webp",
  "./v-1.webp",

 
]

const Carrt = () => {
  const [data, setData] = useState({ img: '', i: 0 })

  const viewImage = (img, i) => {
    setData({ img, i }) 
  }

  const imgAction = (action) => {
    let i = data.i;
    if (action === 'next-img') {
      setData({ img: images[i + 1], i: i + 1 });
    }
    if (action === 'previous-img') {
      setData({ img: images[i - 1], i: i - 1 });
    }

    if (!action) {
      setData({ img: '', i:0 });
    }

  }


  return (
    <>
      <h2 style={{marginLeft:"30px",marginTop:"30px"}}>Trending Now</h2>
      <p style={{marginLeft:"30px"}}>CAKES IN VOGUE</p> <hr></hr>
      {data.img &&
        <div style={{
          width: '100%',
          height: '100vh',
          background: 'black',
          position: 'fixed',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
        
        

        }}>
           <button onClick={() => imgAction()} style={{ position: 'absolute', top: "10px", right: "10px" }}>x</button>
          <button onClick={() => imgAction('previous-img')}>Previous</button>
          <img src={data.img} style={{ width: 'auto', maxWidth: '90%', maxHeight: '90%'}} />
          <button onClick={() => imgAction('next-img')}>Next</button>
        </div>

      }

      <div style={{ padding: "10px" }}>
        <ResponsiveMasonry
          columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
        >
          <Masonry gutter='20px'>
            {images.map((image, i) => (
              <img
                key={i}
                src={image}
                style={{ width: "100%", display: "block", cursor: "pointer" }}
                alt=""
                onClick={() => viewImage(image, i)}
              />
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </>


  )
}

export default Carrt
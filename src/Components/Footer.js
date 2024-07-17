import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
  return (
    <Container className='fluid' style={{ paddingTop: "50px" }} >
      <Row>
        <Col >
          <div className=''>
            <img src='./bakingo.svg'></img>
          </div>
          <div className='fs-3 icons' >
            <h2 className='fs-4 my-3'>Follow us:</h2>
            <i class="bi bi-facebook p-2"  ></i>
            <i class="bi bi-whatsapp p-2"></i>
            <i class="bi bi-messenger p-2"></i>
            <i class="bi bi-meta p-2"></i>
            <i class="bi bi-github p-2"></i>
          </div>

          <div className='fs-5'>
            <h6 className='py-3'>@ 2024</h6>
            <p>show us some love & connect with us!</p>

          </div>

        </Col>
        <Col>
          <h2>Know Us</h2>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>Terms of Service</li>
            <li className='list-group-item'>Privacy Policy </li>
            <li className='list-group-item'>Owner Guarantee </li>
            <li className='list-group-item'>Renter Refund</li>
            <li className='list-group-item'>Copyright Policy</li>
            <li className='list-group-item'>About Us</li>
            <li className='list-group-item'><a href='/ContactUs'>Contact Us</a></li>
            <li className='list-group-item'>Careers</li>
          </ul>
        </Col>
        <Col>
          <h2 >Need Help</h2>
          <ul className='list-group list-group-flush'>
            <li className='list-group-item'>FAQ</li>
            <li className='list-group-item'>Cancellation and Refund</li>
            <li className='list-group-item'>Privacy policy</li>
            <li className='list-group-item'>Terms and conditions</li>
            <li className='list-group-item'>Customer Grievance</li>
            <li className='list-group-item'>Sitemap</li>
          </ul>
        </Col>
          {/* <Col>
          <h2 className='fs-5'>Experience Banking App on Mobile</h2>
          <div >
          <img src='./scan.1.svg' class="img-fluid"></img>
          </div>
         <div style={{position:"relative",left:"95px",bottom:"89px"}}>
         <img src='./playstore.svg' class="img-fluid"></img>
         </div>
        <div  style={{position:"relative",left:"95px",bottom:"85px"}}>
        <img src='./playstore.svg' class="img-fluid"></img>
        </div>
         
        </Col> */}
     </Row>
      <hr></hr>
      <Col>
        <h6 >We Accepted:</h6>
        <img src='./payment.avif' class="img-fluid" style={{width:"650px",display:"block"}}></img><hr></hr>
      </Col>
    </Container>

  )
}

export default Footer

import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './App1.css'


function Home1() {
  return (

    <Navbar variant="dark" bg='secondary' expand="lg">
      <Container>
              <Navbar.Collapse id="navbar-dark-example">
          <Nav>
            <div class="dropdown">
              <h2 className='demo'>Trending cakes</h2>
              <div class="dropdown-content">
                <a href="#">Eggless cakes</a>
                <a href="#">pinata cakes</a>
                <a href="#">photo cakes</a>
                <a href="#">Surprise cakes</a>
                <a href="#">Cheese cakes</a>
                <a href="#">Pull me up cakes</a>
                <a href="#">Bomb cakes</a>
                <a href="#">Half cakes</a>
                <a href="#">Photo pulling cakes</a>
                <a href="#">Rose cakes</a>
              </div>
            </div>
            </Nav>
          <Nav>
          <div class="dropdown">
              <h2 className='demo' >By Flavours</h2>
              <div class="dropdown-content">
                <a href="#">chocolate cakes</a>
                <a href="#">Butterscotch cakes</a>
                <a href="#">Mango cakes</a>
                <a href="#">pineapple cakes</a>
                <a href="#">Black Forest cakes</a>
                <a href="#">Strawberrycakes</a>
                <a href="#">Red velvet cakes</a>
                <a href="#">vanilla cakes</a>
                <a href="#">Blueberry cakes</a>
                </div>
           </div>   
           </Nav>
          
          <Nav>
          <div class="dropdown">
              <h2 className='demo'>Desserts</h2>
              <div class="dropdown-content">
                <a href="#">Jarcakes</a>
                <a href="#">Pastries</a>
                <a href="#">Cheese cakes</a>
                <a href="#">Cup cakes</a>
                <a href="#">Brownies</a>
                <a href="#">Tea cakes</a>
                <a href="#">Personalised cakes</a>
                <a href="#">Personalised Jarcakes</a>
                <a href="#">Gift Hampers</a>
              </div>
           </div>   
          </Nav>
          <Nav>
          <div class="dropdown">
              <h2 className='demo' >Birthday</h2>
              <div class="dropdown-content">
                <a href="#">All Birthday cakes</a>
                <a href="#"> 1st Birthday cakes</a>
                <a href="#">1st Birthday cakes</a>
                <a href="#">Birthday photo cakes</a>
                </div>
           </div>   
          </Nav>
          <Nav>
          <div class="dropdown">
              <h2 className='demo'>Anniversary</h2>
              <div class="dropdown-content">
                <a href="#">All Anniversary cakes</a>
                <a href="#"> 1st Anniversary cakes</a>
                <a href="#">25th Anniversary cakes</a>
                <a href="#">Anniversary photo cakes</a>
                </div>
           </div>   
          </Nav>
          <Nav>
          <div class="dropdown">
              <h2 className='demo'> Occasion</h2>
              <div class="dropdown-content">
                <a href="#">Father's day cakes</a>
                <a href="#"> Independence cakes</a>
                <a href="#">Rakhi cakes</a>
                <a href="#">Ganesh chaturti</a>
                <a href="#">Christmas cakes</a>
                <a href="#">New Year cakes</a>
                <a href="#">Republic cakes</a>
                <a href="#">Valentine  cakes</a>
                <a href="#">Holi cakes</a>
              </div>
           </div>   
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Home1
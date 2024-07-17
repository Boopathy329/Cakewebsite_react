import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'
import Offcanvas from 'react-bootstrap/Offcanvas';
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { IoMdContact } from "react-icons/io";
import { BsCalendar2Heart } from "react-icons/bs";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { IoHomeOutline } from "react-icons/io5";

function Home() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>

      {['xxl'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-secondary  bg-dark ">
          <Container fluid>
            <Navbar.Brand href="#" className='text-danger fs-3 fw-bolder'><img src='./bakingo.svg' style={{ width: "90px" }}></img></Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body className=' col-12'>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div class="input-group margin-group">
                    <span class="input-group-text" id="basic-addon1"><i class="bi bi-search"></i></span>
                    <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                  </div>
                  <Nav.Link href="#action2">   <a href='/'><IoHomeOutline  size={23}/></a> </Nav.Link>
                  <Nav.Link href="#action2"><RiMoneyRupeeCircleLine size={23} /></Nav.Link>
                  <Nav.Link href="#action2"><FaRegHeart size={23} /></Nav.Link>
                  <Nav.Link href="#action2"><MdOutlineShoppingCart size={23} /></Nav.Link>
                  <Nav.Link href="#action2"> <a href='/ContactUs'> <IoMdContact size={23}  /></a></Nav.Link>
                  {/* <Nav.Link href="#action2"><button type="button" class="btn btn-outline-primary">LOGIN</button></Nav.Link> */}
                  <Button variant="primary" onClick={handleShow}>
                    LOGIN
                  </Button>

                  <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                  >
                    <Modal.Header closeButton>
                      <Modal.Title></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div className="d-grid gap-1">
                        <Button variant="primary" size="xxxl" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                          <i class="bi bi-facebook"></i> Login with facebook
                        </Button>
                        <Button variant="danger" size="xxxl" style={{ paddingLeft: "30px", paddingRight: "30px" }}>
                          <i class="bi bi-google"></i> Login with Google
                        </Button>
                      </div>
                    </Modal.Body>
                    <form>
                      <div class="mb-3 mx-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                      </div>
                      <div class="mb-3 mx-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleInputPassword1" />
                      </div>
                      <div class="mb-3 mx-3 form-check">
                        <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                        <label class="form-check-label" for="exampleCheck1">Remember me</label>
                        <label class="form-check-label" style={{ marginLeft: "200px" }} for="exampleCheck1">Forget Password ?</label>
                      </div>
                      <button type="submit" class="btn btn-primary mx-3 mb-2">Submit</button>
                    </form>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleClose}>
                        Close
                      </Button>
                    </Modal.Footer>
                  </Modal>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}

    </div>
  )
}

export default Home;






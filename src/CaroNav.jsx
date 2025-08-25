import Container from 'react-bootstrap/Container';
import { useState,useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { IoIosCall } from "react-icons/io";
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import slider1 from './assets/slider-image1.jpg';
import slider2 from './assets/slider-image2.jpg';
import slider3 from './assets/slider-image3.jpg';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function CaroNav() {
    const [index, setIndex]=useState(0);
    const[scrolled, setScrolled]=useState(false);
    const handleSelect=(selectedIndex)=>setIndex(selectedIndex);
    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY >50)setScrolled(true);
            else setScrolled(false);
        }
        window.addEventListener("scroll",handleScroll);
        return()=>window.removeEventListener("scroll",handleScroll);
    },[]);
  return (
    <>
    <Navbar  expand="lg" sticky="top" className={scrolled ? "navbar-colored" : "navbar-transparent"} >
      <Container >
        <Navbar.Brand href="#home"><h4>Eatery<span style={{color:"#dc3545"}}>.</span>Cafe</h4></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            
           <Nav.Link href="#home"><h5 style={{fontSize:"13px"}}>Home</h5></Nav.Link>
            <Nav.Link href="#link"><h5 style={{fontSize:"13px"}}>Above</h5></Nav.Link>
            <Nav.Link href="#link"><h5 style={{fontSize:"13px"}}>Chef</h5></Nav.Link>
            <Nav.Link href="#link"><h5 style={{fontSize:"13px"}}>Menu</h5></Nav.Link>
            <Nav.Link href="#link"><h5 style={{fontSize:"13px"}}>Contact</h5></Nav.Link>
           <Nav.Link href="#link"><h5 style={{fontSize:"15px"}} >CALL NOW!
                <IoIosCall/> 010 020 0340</h5>
            </Nav.Link>
            <Button variant="danger" style={{borderRadius:"0px"}}>Reserve a table</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img className="d-block w-100" src={slider1} alt="First slide" />
          <Carousel.Caption className="caption">
            <h5>EATERY CAFE & RESTAURANT</h5>
            <h3>Our mission is to provide an unforgettable experience</h3>
            <Button variant="danger" style={{ borderRadius: "0px" }}>Meet our chef</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slider2} alt="Second slide" />
          <Carousel.Caption className="caption">
            <h5>YOUR PERFECT BREAKFAST</h5>
            <h3>The best dining quality can be here too</h3>
            <Button variant="dark" style={{ borderRadius: "0px" }}>Discover menu</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={slider3} alt="Third slide" />
          <Carousel.Caption className="caption">
            <h5>NEW RESTAURANT IN TOWN</h5>
            <h3>Enjoy our special menus on every Sunday and Friday</h3>
            <Button variant="dark" style={{ borderRadius: "0px", border: "1px solid white" }}>Reservation</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel></>
  );
}

export default CaroNav;
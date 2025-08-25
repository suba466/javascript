import box from './assets/box.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


import Button from 'react-bootstrap/Button'; 
import './Tem1.css'
function Pro(){
    return(<>
        <div className='img'>
            <Navbar expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#home" style={{color:"white"}}>
        
        
        <Row style={{float:"left"}}>

        <Col className='col-auto'><img src={box} /></Col>
        <Col><Row>
        <Col><h4>Simple House</h4></Col></Row>
        <Row>
        <Col><p>new restaurant template</p></Col></Row>
        </Col>
      </Row>
        </Navbar.Brand>
          <Nav className='right'>
            <Nav.Link href="#home" className='Nav'>Home</Nav.Link>
            <Nav.Link href="#link" className='Nav'>About</Nav.Link>
            <Nav.Link href="#link" className='Nav'>Contact</Nav.Link>
          </Nav>
          
      </Container>
    </Navbar>
    </div>
        </>
  );
}export default Pro;
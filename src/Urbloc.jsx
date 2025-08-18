import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { IoMdLocate } from "react-icons/io";
import {useState} from 'react';
import { Dropdown, Modal } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { CiLocationOn } from "react-icons/ci";
import './Urbanav.css'
function Urbloc(){
    const[show, setShow]=useState(false);
    const handleClose=()=>setShow(false);
    const handleShow=()=>setShow(true);
    return(
        <Container style={{marginLeft:"200px"}}>
      <Row>
        <Col>
           <Dropdown >
            <Dropdown.Toggle variant="outline-secondary" onClick={handleShow} style={{fontSize:"10px"}}>
            <CiLocationOn style={{marginRight:"6px"}} />
            184, Balaji Nagar- New....
            </Dropdown.Toggle>
           </Dropdown>
           <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                </Modal.Header>
            <Modal.Body>
                <input type="text" placeholder="Search location..."
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              marginBottom: "12px",
              fontSize:"12px"            }}/>
            <a href="#" style={{ color: "#1a6692", textDecoration:"none", fontSize:"12px"}}>
            <IoMdLocate />Use current location
          </a>
            </Modal.Body>
           </Modal>
        </Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
        <Col>1 of 1</Col>
      </Row>
    </Container>
    )
}
export default Urbloc;
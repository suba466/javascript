import Container from "react-bootstrap/esm/Container";
import team1 from './assets/team-image1.jpg';
import team2 from './assets/team-image2.jpg';
import team3 from './assets/team-image3.jpg';
import Card from 'react-bootstrap/Card';
import { FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
function Meet(){
    return(
        <Container style={{margin:"40px auto"}}>
            <h2 style={{textAlign:"center"}}>Meet our chefs</h2>
            <p style={{textAlign:"center", color:"#bfbdbd"}}>THEY ARE NICE & FRIENDLY</p>
            <div className="chef1" style={{display:"flex", gap:"23px", justifyContent:"center"}}>
                <Card style={{ width: '23rem'}}>
                    <div className="chef1 card">
                        <Card.Img variant="top" src={team1} />
                        <div className="overlay">
                            <h6>Duis vel lacus id magna mattis vehicula</h6>
                            <FaLinkedin /><IoMailOutline />
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <h5 style={{fontWeight: "bold",textAlign:"center"}}>New Catherine</h5>
                        </Card.Title>
                        <Card.Text>
                            <p style={{color: "#bfbdbd",fontWeight: "bold",textAlign:"center"}}>KITCHEN OFFICER</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem'}}>
                    <div className="chef1 card">
                        <Card.Img variant="top" src={team2} />
                        <div className="overlay">
                            <h6>Duis vel lacus id magna mattis vehicula</h6>
                            <FaLinkedin style={{display:"inline-block"}}/><IoMailOutline />
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <h5 style={{fontWeight: "bold",textAlign:"center"}}>Lindsay Perlen</h5>
                        </Card.Title>
                        <Card.Text>
                            <p style={{color: "#bfbdbd",fontWeight: "bold",textAlign:"center"}}>OWNER & MANAGER</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '23rem'}}>
                    <div className="chef1 card">
                        <Card.Img variant="top" src={team3} />
                        <div className="overlay">
                            <h6>Duis vel lacus id magna mattis vehicula</h6>
                            <FaLinkedin /><IoMailOutline />
                        </div>
                    </div>
                    <Card.Body>
                        <Card.Title>
                            <h5 style={{fontWeight: "bold",textAlign:"center"}}>Isabella Grace</h5>
                        </Card.Title>
                        <Card.Text>
                            <p style={{color: "#bfbdbd",fontWeight: "bold",textAlign:"center"}}>PIZZA SPECIALIST</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    )
}

export default Meet;

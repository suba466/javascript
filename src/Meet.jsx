import Container from "react-bootstrap/esm/Container";
import team1 from './assets/team-image1.jpg';
import team2 from './assets/team-image2.jpg';
import team3 from './assets/team-image3.jpg';
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
function Meet(){
    return(
        <>
        <Container style={{margin:"40px auto"}}>
            <h2 style={{textAlign:"center"}}>Meet our chefs</h2>
            <p style={{textAlign:"center", color:"#bfbdbd"}}>THEY ARE NICE & FRIENDLY</p>
            <Row>
                <Col>
                <img src={team1}style={{width:"100%"}} /></Col>
                <Col> <img src={team2} style={{width:"100%"}}/></Col>
                <Col> <img src={team3}style={{width:"100%"}} /></Col>
            </Row>
        </Container>
        </>
    )
}export default Meet;
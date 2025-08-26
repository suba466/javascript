import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import abt from './assets/about-image.jpg'
function Aboutcar(){
    return(
        <>
        <Container style={{margin:"40px auto"}}>
            <Row>
                <Col style={{margin:"70px auto"}} >
                <h6 style={{color:"#bfbdbd",fontSize:"10px"}}>READ OUR STORY</h6>
                <h3 style={{fontWeight:"bold"}}>We've been Making The Delicious Foods Since 1999</h3>
                <p style={{color:"#bfbdbd"}}>Fusce hendrerit malesuada lacinia. Donec semper semper sem vitae malesuada. Proin scelerisque risus et ipsum semper molestie sed in nisi. Ut rhoncus congue lectus, rhoncus venenatis leo malesuada id.Sed elementum vel felis sed scelerisque. In arcu diam, sollicitudin eu nibh ac, posuere tristique magna. You can use this template for your cafe or restaurant website. Please tell your friends about <span style={{color:"#000000ff"}}>templatemo</span> . Thank you.</p>
                </Col>
                <Col ><img src={abt} style={{width:"100%"}} /></Col>
            </Row>
        </Container>
        </>
    )
}export default Aboutcar;
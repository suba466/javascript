import Container from 'react-bootstrap/Container';
import img1 from "./assets/img-01.jpg";
import Button from 'react-bootstrap/Button'; 
import './Tem1.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Avacado(){
        return(
        <Container style={{margin:"40px auto"}}>
        <Row >
            <Col><img src={img1} alt="acado" /></Col>
            <Col style={{margin:"58px auto"}}><h4 style={{textAlign:"center", color:"#1a6692"}}>Maecenas nulla neque</h4>
                <p style={{textAlign:"center", color:'Gray'}}>Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to talk to us for additional permissions about our templates. Thank you.</p>
            <Button className='button1 left'>Read more</Button></Col>
        </Row>
    </Container>
);
}export default Avacado;
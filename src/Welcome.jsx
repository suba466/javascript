import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './Tem1.css';
function Welcome(){
    return(
      <>
        <Container >
        <h2 style={{marginTop:"60px", textAlign:"center"}}>Welcome to simple House</h2>
        <div className="welcome"><p style={{textAlign:"center", color:"gray"}}>Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.</p></div>
        <div className="welcome">
        <Button className='button1'>Pizza</Button>
        <Button className='button1'>Salad</Button>
        <Button className='button1'>Noodles</Button>
      </div>
    </Container></>
    )
}export default Welcome;

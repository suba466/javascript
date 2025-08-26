import food1 from "./assets/food1.jpg";
import food2 from "./assets/food2.jpg";
import food3 from "./assets/food3.jpg";
import food4 from "./assets/food4.jpg";
import food5 from "./assets/food5.jpg";
import food6 from "./assets/food6.jpg";
import food7 from "./assets/food7.jpg";
import food8 from "./assets/food8.jpg";
import './Tem1.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
function Cards(){
    return(
        <Container>
        <Row style={{width:"100%"}}>
        {[
            { img: food1, title: "Fusce dictum finibus", price: "$45 / $55" },
            { img: food2, title: "Aliquam sagittis", price: "$65 / $70" },
            { img: food3, title: "Sed varius turpis", price: "$30.50" },
            { img: food4, title: "Aliquam sagittis", price: "$25.50" },
            { img: food5, title: "Maecenas eget justo", price: "$80.25"},
            { img: food6, title: "Quisque et felis eros", price: "$20 / $40 / $60"},
            { img: food7, title: "Sed ultricies dui", price: "$94" },
            { img: food8, title: "Donec porta consequat", price: "$15" },
        ].map((food,i)=>(
            <Col key={i}>
                <Card className='border-0 shadow-sm' style={{width:"15rem"}}>
                <Card.Img variant="top" src={food.img} className="card-img-top"/>
                <Card.Body>
        <Card.Title style={{color:"#1a6692", fontSize:"1.1rem"}}>{food.title}</Card.Title>
        <Card.Text className='text-muted'>
          <p>Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan.</p>
          <p className="text-success fs-5">{food.price}</p>
        </Card.Text></Card.Body></Card>
            </Col>
        ))}
        </Row>
    </Container>
    )
}export default Cards;


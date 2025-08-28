import  { useContext } from "react";
import { profile } from'./profilecontext.jsx';
import { Card, Button } from "react-bootstrap";

function Box2() {
  const { theme, changeTextColors } = useContext(profile);
  const t = theme.comp2;

  return (
    <Card style={{ backgroundColor: t.backclr, color: t.clr }} className="p-3 mb-3 text-center">
      <Card.Title>Component 2</Card.Title>
      <Card.Text>This is Component 2</Card.Text>
      <Button size="sm" variant="dark" onClick={changeTextColors}>Change Text Color</Button>
    </Card>
  );
}export default Box2

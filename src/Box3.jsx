import { useContext } from "react";
import { profile } from "./profilecontext.jsx";
import { Card, Button } from "react-bootstrap";

 function Box3() {
  const { theme, resetTheme } = useContext(profile);
  const t = theme.comp3;

  return (
    <Card style={{ backgroundColor: t.backclr, color: t.clr }} className="p-3 mb-3 text-center">
      <Card.Title>Component 3</Card.Title>
      <Card.Text>This is Component 3</Card.Text>
      <Button size="sm" variant="secondary" onClick={resetTheme}>Reset All</Button>
    </Card>
  );
}export default Box3

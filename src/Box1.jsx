import { useContext } from 'react';
import {profile} from './profilecontext.jsx';
import { Card,Button } from 'react-bootstrap';
function Box1(){
    const {theme, changeBackgrounds}=useContext(profile);
    const t = theme.comp1;

  return (
    <Card style={{ backgroundColor: t.backclr, color: t.clr }} className="p-3 mb-3 text-center">
      <Card.Title>Component 1</Card.Title>
      <Card.Text>This is Component 1</Card.Text>
      <Button size="sm" onClick={changeBackgrounds}>Change Backgrounds</Button>
    </Card>
  );
}
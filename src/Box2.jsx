import { useContext } from "react";
import { profile } from "./profile.jsx";
import { Card, Button } from "react-bootstrap";

function Box2() {
  const { theme, changeTextcolor } = useContext(profile);
  const t = theme.comp2;

  return (
    <div style={{ margin:"10px",backgroundColor: t.backclr, color: t.clr,width:"33.33%",height:"150px" }} >
      <h3>Component 2</h3>
      <p>Here we are changing the text color</p>
      <Button  onClick={changeTextcolor}>Change color</Button>
    </div>
  );
}

export default Box2;

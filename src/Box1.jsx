import { useContext } from "react";
import { profile } from "./profile.jsx";
import {  Button } from "react-bootstrap";

function Box1() {
  const { theme, changeBackground } = useContext(profile);
  const t = theme.comp1;

  return (
    <div style={{ margin:"10px",backgroundColor: t.backclr, color: t.clr,width:"33.33%",height:"150px" }} >
      <h3>Component 1</h3>
      <p>Here we are changing the backgrouund color</p>
      <Button  onClick={changeBackground} >Change Backgrounds</Button>
    </div>
  );
}

export default Box1;

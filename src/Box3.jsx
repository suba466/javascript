import { useContext } from "react";
import { profile } from "./profile.jsx";
import { Button } from "react-bootstrap";

function Box3() {
  const { theme, design } = useContext(profile);
  const t = theme.comp3;

  return (
    <div style={{ margin:"10px", backgroundColor: t.backclr, color: t.clr, border:t.border, width:"33.33%", height:"150px" }}>
      <h3>Component 3</h3>
      <p>Here we are changing the design</p>
      <Button onClick={design}>Change Design</Button>
    </div>
  );
}
export default Box3;

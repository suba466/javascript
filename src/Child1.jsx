import { useContext } from "react";
import { ThemeContext } from "./Theme";
import Button from 'react-bootstrap/Button';
function Child(){
    const {theme,toggleTheme}=useContext(ThemeContext);
    return(
        <div style={{
            background: theme=="light"?"#f9f9f9":"#333",
            color:theme=="light"?"#000":"#fff",
            padding:"20px",
            borderRadius:"8px",
            textAlign:"center"
        }}>
            <h3>Child Component</h3>
            <p>Current Theme: {theme}</p>
            <Button onClick={toggleTheme} style={{padding:"5px 10px"}}>Toggle Theme</Button>
        </div>
    )
}export default Child;
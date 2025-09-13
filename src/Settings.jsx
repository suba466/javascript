import { Link,Outlet } from "react-router-dom";
import food2 from "./assets/food2.jpg"
function Settings() {
  return (
    <div style={{textAlign:"center"
    }}>
    <h3>Settings page</h3>
    <img src={food2} alt="" />
    <br />
    <Link to="avacado">avacado</Link> 
    
    <Outlet/>
    </div>
  );
}

export default Settings;

import { useContext } from "react";
import User from "./User";
import Updation from './Updation.jsx';
function Update(){
    const {userName}=useContext(User);
    return(
        <div  style={{ border: "1px solid gray", padding: "20px", margin: "20px" }}>
            <h4>Welome {userName}</h4>
            <Updation/>
        </div>
    )
}export default Update;
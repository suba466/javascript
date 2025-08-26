import { useContext } from "react";
import { profileContext } from "./profilecontext";
function Child(){
    const name=useContext(profileContext);
    return (
        <h2>Welcome to {name}</h2>
    )
}export default Child
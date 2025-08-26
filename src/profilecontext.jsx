import { createContext } from "react";
import Child from './Child.jsx';

export const profileContext=createContext( )

function Usecontext(){
    const name="My simple app";
    return(
        <profile.Provider value={name}>
            <Child/>
        </profile.Provider>
    );
}export default Usecontext;
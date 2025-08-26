import { createContext,useState } from "react";
import Parent from "./Parent.jsx";
export const ThemeContext=createContext();
function Theme(){
    const [theme,setTheme]=useState("light");
    const toggleTheme=()=>{
        setTheme(prev=>(prev=="light"?"dark":"light"));
    };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <Parent/>
        </ThemeContext.Provider>
    );
}export default Theme;
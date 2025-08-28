import { useContext,useState } from "react";
import Box1 from './Box1.jsx';
import Box2 from './Box3.jsx';
import Box3 from './Box2.jsx';
function Task1(){
    const [theme, setTheme]=useState({
        comp1:{backclr:"cadetblue",clr:"brown"},
        comp2:{backclr:"lightblue",clr:"darkblue"},
        comp3:{backclr:"lavender",clr:"purple"}
    });
    const changeBackgrounds=()=>{
        setTheme((prev)=>({
            comp1:{...prev.comp1, backclr:"lightgreen"},
            comp2:{...prev.comp2, backclr:"lightgreen"},
            comp3:{...prev.comp3, backclr:"lightgreen"}
        }));
    };
    const changeTextcolor=()=>{
        setTheme((prev)=>({
            comp1:{...prev.comp1, clr:"red"},
            comp2:{...prev.comp1, clr:"red"},
            comp3:{...prev.comp1, clr:"red"}
        }));
    };
    const resetTheme=()=>{
        setTheme({
            comp1: { backclr: "lightyellow", clr: "brown" },
            comp2: { backclr: "lightblue", clr: "darkblue" },
            comp3: { backclr: "lavender", clr: "purple" }
        });
    }
    return(
        <profile.Provider value={{theme,changeBackgrounds,changeTextcolor,resetTheme}}>
            <Box1/>
            <Box2/>
            <Box3/>
        </profile.Provider>
    )
}export default Task1;
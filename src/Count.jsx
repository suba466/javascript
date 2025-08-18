import { useState } from "react";

function Count(){
    const[count,setCount]=useState(0);
    const[step,setStep]=useState(1);
function increase(){
    setCount(count+step);
}
function decrease(){
    setCount(count-step);
}
    return(
        <div>
            <h4> * Hey player, lets do some simple maths...</h4>
            <p>Current Count:{count}</p>
                <input type="number" value={step} onChange={(e)=>setStep(Number(e.target.value))} style={{marginLeft:"10px"}}/>
            <div style={{marginTop:"10px"}}>
                <button onClick={increase}>Increase</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    );
}export default Count;
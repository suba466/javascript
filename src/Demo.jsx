import { useEffect, useState } from "react";


function Demo(){

    const [name,setName]=useState("sree")
        const [count,setc]=useState(0)
          const [sty,sets]=useState("red")
    // useEffect(()=>{},[])

    useEffect(()=>{ console.log("run")})
    useEffect(()=>{ console.log("welcome")},[])
    useEffect(()=>{ console.log("hi")},[count])
    return (
        <div>
            <h2 style={{color:sty}}>heading</h2>
            <p>name is {name}</p>
              <p>count is {count}</p>
            <button onClick={()=>{setName("dharanya");setc(count+1)}}>click</button>
        </div>
    )
}
export default Demo;
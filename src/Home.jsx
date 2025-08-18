import {useState} from "react";
function Home(){
    const[name, setName]=useState("");
    const[greeting, setGreeting]=useState("");
    function handleGreet(){
        setGreeting("Hello, "+name+" ! Welcome to react!!");
    }
    function handleChangeColor(){
        document.body.style.backgroundColor="#"+Math.floor(Math.random()*16777215).toString(16)
    }
    return (
        <div className="">
            <h2>React Practice Form</h2>
            <div className="section">
                <h4>Your name:</h4>
                <input type="text" placeholder="Enter your name.." value={name} onChange={(e)=> setName(e.target.value)} style={{padding:"5px", marginRight:"10px"}} />
                {greeting ?<p>{greeting}</p>:<p>Please enter your name.. </p>}
                <p>Your name in caps: {name.toUpperCase()}</p>
                <button onClick={handleGreet}>Greet Me</button><br/>
                <button onClick={handleChangeColor}>Change Background</button>
        </div></div>
    );
}
export default Home;

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Home'
import Count from './Count'
import Image from './Image'

function App() {
  const [count, setCount]=useState(0);
  const [step, setStep]=useState(1);
  const [name, setName]=useState("");
  const [greeting, setGreeting]=useState("");
  function handleGreet(){
    setGreeting("Hello, "+name+" ! Welcome to react!!");
  }
  function handleChangeColor() {
        document.body.style.backgroundColor= "#"+Math.floor(Math.random()*16777215).toString(16)
  }
  function increase(){
    setCount(count+step);
  }
  function decrease(){
    setCount(count-step);
  }
  return (
    <>
    <div className='bgs'>
      <Home name={name} setName={setName} />
      {greeting ? <p>{greeting}</p>: <p>Please enter your name...</p>}
      <button onClick={handleGreet}>Greet Me</button>
      <p>Current Time:{new Date().toLocaleTimeString()}</p>
      <button onClick={handleChangeColor}>Change Background</button>
      
      <p>Your name in caps: {name.toUpperCase()}</p>
      <h4> * Hey player, lets do some simple maths...</h4>
      <Count count={count} step={step} setStep={setStep} increase={increase} decrease={decrease} />
      <Image/>
      </div>
    </>
  );
}

export default App;

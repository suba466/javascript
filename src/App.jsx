import { useState } from 'react'
//import reactLogo from './assets/react.svg';
//import viteLogo from './vite.svg';
import './App.css'
import { FiClock } from "react-icons/fi";
import Home from './Home'
import Count from './Count'
import Image from './Image'

import Demo from './Demo';
//import { profile } from './profilecontext';

function App() {
  
  const [count, setCount]=useState(0);
  const [step, setStep]=useState(1);
  const [name, setName]=useState("dhranaya");

  function increase(){
    setCount(count+step);
  }
  function decrease(){
    setCount(count-step);
  }
  return (
    <>
    <div className='' style={{textAlign:"center"}}>
      <profile.Provider value={name}>

      
      <Demo />
        <Home name={name} setName={setName} />

      </profile.Provider>
        <p><FiClock style={{fill:"red"}} />Current Time:{new Date().toLocaleTimeString()}</p>
        <Count count={count} step={step} setStep={setStep} increase={increase} decrease={decrease} />
        <Image/>
      </div>
      
    </>
  );
}

export default App;

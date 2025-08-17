import { useState } from 'react';
import Home from './Home';
import Count from './Count';
import Image from './Image';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  function handleGreet() {
    if (!name.trim()) {
      setGreeting("Please type your name first.");
      return;
    }
    setGreeting(`Hello, ${name}! Welcome to React!!`);
  }

  function handleChangeColor() {
    document.body.style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  }

  function increase() {
    setCount(count + step);
  }
  function decrease() {
    setCount(count - step);
  }

  return (
    <div className="bgs">
      <h2>My React App</h2>

      {/* Greeting Section */}
      <Home name={name} setName={setName} />
      {greeting ? (
        <p>{greeting}</p>
      ) : (
        <p>Please enter your name...</p>
      )}
      <button onClick={handleGreet}>Greet Me</button>
      <button onClick={handleChangeColor}>Change Background</button>

      <p>Your name in CAPS: <strong>{name.toUpperCase()}</strong></p>
      <p>Current Time: {new Date().toLocaleTimeString()}</p>

      {/* Counter Section */}
      <h4>Counter App</h4>
      <Count
        count={count}
        step={step}
        setStep={setStep}
        increase={increase}
        decrease={decrease}
      />

      {/* Image Upload Section */}
      <Image />
    </div>
  );
}

export default App;

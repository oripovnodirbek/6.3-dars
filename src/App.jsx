import React, { useState } from 'react';
import './App.css';
import Masala2 from './product/masala2';
import Post from './product/masala3'; 
import Games from './product/masala4'
import Progg from './product/masala5'

function App() {
  const [counter, setCounterState] = useState(0);

  function ayirish() {
    setCounterState(counter - 1);
  }

  function qoshish() {
    setCounterState(counter + 1);
  }

  console.log(counter);
  return (
    <>
      <div className="card1">
        <h2>{counter}</h2>
        <div className="card1_but">
          <button onClick={ayirish}>-</button>
          <button onClick={qoshish}>+</button>
        </div>
      </div>
      <Masala2 />
      <Post /> 
      <Games />
      <Progg />
    </>
  );
}

export default App;


import React, { useState, useEffect } from 'react'
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  const [resetCounter, setResetCounter] = useState(false);

  const clickHandler = () => {
      setCounter(counter + 1);
  }

  const resetHandler = () => {
      setResetCounter(!resetCounter);
  }

  useEffect(() => {
      if(counter > 0){
          setCounter(0);
      }
  }, [ resetCounter])

  return (
    <div className="App">
        <div>Counter Value: {counter}</div>
        <button onClick={clickHandler}>
            Increase Counter
        </button>
        <button onClick={resetHandler}>
            Reset Counter
        </button>
    </div>
  );
}

export default App;
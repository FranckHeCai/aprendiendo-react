import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(55);
  const [seconds, setSeconds] = useState(0);
  const [hours, setHours] = useState(0)
  const [range, setRange] = useState(5)
  const [isRunning, setIsRunning] = useState(false);

  const addMinutes = () => {
    setMinutes(prevMinutes => {
      if (prevMinutes + range >= 60) {
        setHours(hours + 1);
        return (prevMinutes + range) % 60;
      }
      return prevMinutes + range;
    });
  }
  const restMinutes = () => {
    setMinutes(prevMinutes => {
      if(prevMinutes - range <0){
        if(hours>0){
          setHours(hours-1)
          return 55
        }else{
          return 0
        }
        
      }
      return prevMinutes-range
    });
  }

  useEffect(() => {
    
  }, []);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div className="card">
        <h2>Total Time : {String(hours).padStart(2, "0")}:{String(minutes).padStart(2,"0")}:{String(seconds).padStart(2, "0")}</h2>
        <button onClick={addMinutes}>Add 5 minutes</button>
        <button onClick={restMinutes}>Rest 5 minutes</button>
        <button>Start Timer</button>
      </div>
    </div>
  );
}

export default App

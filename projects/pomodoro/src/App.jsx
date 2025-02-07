import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(3600);
  const [hours, setHours] = useState(2)
  const [converted, setConverted] = useState(0)
  const [isRunning, setIsRunning] = useState(false);

  const addMinutes = () => f
  const restMinutes = () => f

  const startTimer = () => setIsRunning(true)
  const stopTimer = () => setIsRunning(false)

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        if(seconds===0){
          clearInterval(interval)
          setIsRunning(false)
        }else{
          setSeconds(prev => prev - 1)
        }
      }, 1000);
    } else if(!isRunning && seconds !==0){
      clearInterval(interval)
    }
    return () => clearInterval(interval);
  }, [hours, minutes, seconds, isRunning]);

  return (
    <div className="App">
      <h1>Pomodoro Timer</h1>
      <div className="card">
        <h2>Timer: {String(Math.floor(seconds / 3600)).padStart(2, "0")}:{String(Math.floor((seconds % 3600) / 60)).padStart(2,"0")}:{String(seconds % 60).padStart(2, "0")}</h2>
        <button onClick={addMinutes} disabled={isRunning}>Add 5 minutes</button>
        <button onClick={restMinutes} disabled={isRunning}>Rest 5 minutes</button>
        <button onClick={isRunning? stopTimer : startTimer}>{isRunning? "Stop Timer" : "Start Timer"}</button>
      </div>
    </div>
  );
}

export default App

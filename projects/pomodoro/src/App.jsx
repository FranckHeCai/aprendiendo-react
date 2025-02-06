import React, { useState, useEffect } from 'react';
import './App.css'

function App() {
  const [minutes, setMinutes] = useState(2);
  const [seconds, setSeconds] = useState(5);
  const [hours, setHours] = useState(1)
  const [isRunning, setIsRunning] = useState(false);

  const addMinutes = () => {
    setMinutes(prevMinutes => {
      if (prevMinutes + 5 >= 60) {
        setHours(hours + 1);
        return (prevMinutes + 5) % 60;
      }
      return prevMinutes + 5;
    });
  }
  const restMinutes = () => {
    setMinutes(prevMinutes => {
      if(prevMinutes - 5 <0){
        if(hours>0){
          setHours(hours-1)
          return 55
        }else{
          return 0
        }
      }
      return prevMinutes-5
    });
  }

  const startTimer = () =>{
    setIsRunning(true)
  }

  useEffect(() => {
    let interval = null
    if (isRunning) {
      interval = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
          setIsRunning(false);
        }
        setSeconds(prevSeconds => {
          if (prevSeconds - 1 < 0) {
            if (minutes > 0) {
              setMinutes(prev => prev - 1)
              return 59;
            } else if (hours > 0) {
              setMinutes(59);
              setHours(prevHours => prevHours - 1);
              return 59;
            } else {
              return 0;
            }
          } else {
            return prevSeconds - 1;
          }
        });
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
        <h2>Total Time : {String(hours).padStart(2, "0")}:{String(minutes).padStart(2,"0")}:{String(seconds).padStart(2, "0")}</h2>
        <button onClick={addMinutes}>Add 5 minutes</button>
        <button onClick={restMinutes}>Rest 5 minutes</button>
        <button onClick={startTimer} disabled={isRunning} >Start Timer</button>
      </div>
    </div>
  );
}

export default App

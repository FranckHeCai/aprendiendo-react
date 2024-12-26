import {useEffect, useState } from 'react'
import './App.css'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    if (enabled) {
      const handleMouseMove = (e) => {
        setPosition({ x: e.clientX, y: e.clientY })
      }
      window.addEventListener('mousemove', handleMouseMove)
      return () => {
        window.removeEventListener('mousemove', handleMouseMove)
      }
    }
  }, [enabled])

  return (
    <>
      <div  style={{
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        border: '1px solid #fff',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -25,
        top: -25,
        width: 50,
        height: 50,
        transform: `translate(${position.x}px, ${position.y}px)`
      }} ></div>
      <button onClick={()=> setEnabled(!enabled)}>{enabled ? 'Desactivar' : 'Activar'} seguimiento de puntero</button>
    </>
    
    
  )
}


function App() {

  return (
    <main>
      <h3>Mouse follower</h3>
      <FollowMouse />
    </main>
  )
}

export default App

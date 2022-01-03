import React, {useState, useEffect} from 'react'
import { MostraVoltas } from './components/mostraVoltas'
import { Tempo } from './components/tempo'
import {Button} from './components/button'
import './style.css'
  function App() {
  const [numVoltas, setVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)
  useEffect(()=>{
    let timer = null
    if(running){
     timer = setInterval(()=>{
        setTempo(old => old+1)
      },1000)
    }
    return () =>{
      if(timer){
        clearInterval(timer)
      }
    }
  },[running])
  const toggleRunning = () =>{
    setRunning(!running)
  }
  const increment = () =>{
    setVoltas(numVoltas+1)
  }
  const decrement = () =>{
    if(numVoltas > 0){
      setVoltas(numVoltas-1)
    }
  }
  const reset = () =>{
    setTempo(0)
    setVoltas(0)
  }
  return (
    <div className='App'>
    <MostraVoltas voltas={numVoltas}/>
    <Button text='+' action={increment} className='bigger'/>
    <Button text='-' action={decrement} className='bigger'/>
    {
      numVoltas > 0 &&
      <Tempo tempo={Math.round(tempo/numVoltas)}/>
    }
    <Button action={toggleRunning} text={running?'Pausar':'Iniciar'}/>
    <Button action={reset} text='Reiniciar'/>
    </div>
  )
}

export default App

import React, {useState, useEffect} from 'react'
  const MostraVoltas = (props) => {
    return(
      <p>
      {props.voltas}
      <br/>
      Voltas
      </p>
    )
  }
  const Tempo = (props) =>{
    const tempo = props.tempo
    const min = Math.round(tempo/60)
    const sec = tempo%60
    const minStr = min < 10? '0'+min: min
    const secStr = sec < 10? '0'+sec: sec
    return(
    <p>
    {`${minStr}:${secStr}`}<br/>
    Tempo médio por volta
    </p>
    )
  }
  const Button = (props)=> <button onClick={props.action}>{props.text}</button>
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
    setVoltas(numVoltas-1)
  }
  const reset = () =>{
    setTempo(0)
    setVoltas(0)
  }
  return (
    <div className='App'>
    <MostraVoltas voltas={numVoltas}/>
    <Button text='+' action={increment}/>
    <Button text='-' action={decrement}/>
    {
      numVoltas > 0 &&
      <Tempo tempo={Math.round(tempo/numVoltas)}/>
    }
    <Button action={toggleRunning} text='Iniciar'/>
    <Button action={reset} text='Reiniciar'/>
    </div>
  )
}

export default App

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
    const min = Math.ceil(tempo/60)
    const sec = tempo%60
    return(
    <p>
    {`${min}:${sec}`}<br/>
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
  return (
    <div className='App'>
    <MostraVoltas voltas={numVoltas}/>
    <Button text='+' action={increment}/>
    <Button text='-' action={decrement}/>
    <Tempo tempo={tempo}/>
    <Button action={toggleRunning} text='Iniciar'/>
    <Button text='Reiniciar'/>
    </div>
  )
}

export default App

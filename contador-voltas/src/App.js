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
    return(
    <p>
    {props.tempo}<br/>
    Tempo médio por volta
    </p>
    )
  }
  const Button = (props)=> <button onClick={props.action}>{props.text}</button>
  function App() {
  const [numVoltas, setVoltas] = useState(0)
  const [tempo, setTempo] = useState(0)
  useEffect(()=>{
    setInterval(()=>{
      console.log('opa')
    },1000)
  },[])
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
    <Button text='Iniciar'/>
    <Button text='Reiniciar'/>
    </div>
  )
}

export default App

import React from 'react'
function App() {
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
    <p>
    {props.tempo}<br/>
    Tempo médio por volta
    </p>
  }
  return (
    <div className='App'>
    <MostraVoltas voltas='12'/>
    <button>+</button>
    <button>-</button>
    <Tempo tempo='12:25'/>
    <button>Iniciar</button>
    <button>Reiniciar</button>
    </div>
  )
}

export default App

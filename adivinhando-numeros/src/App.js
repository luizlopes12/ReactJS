import React, {useState} from 'react'
function App() {
  //Estados: entrada, rodando, fim
  const [estado, setEstado] = useState('Entrada')
  //palpite
  const [palpite, setPalpite] = useState(150)

  const iniciarJogo = () =>{
    setEstado('Rodando')
  }
  if(estado == 'Entrada'){
    return <button onClick={iniciarJogo}>Começar a jogar</button>
  }
  return (
    <div className="App">
    <p>O seu número é {palpite}?</p>
    <button>Menor</button>
    <button>Acertou</button>
    <button>Maior</button>

    </div>
  );
}

export default App;

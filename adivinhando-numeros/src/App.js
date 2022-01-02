import React, {useState} from 'react'
function App() {
  //Estados: entrada, rodando, fim
  const [estado, setEstado] = useState('Entrada')
  const iniciarJogo = () =>{
    setEstado('Rodando')
  }
  if(estado == 'Entrada'){
    return <button>Começar a jogar</button>
  }
  return (
    <div className="App">
    <button>Menor</button>
    <button>Acertou</button>
    <button>Maior</button>

    </div>
  );
}

export default App;

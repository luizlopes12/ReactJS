import React, {useState} from 'react'
function App() {
  //Estados: entrada, rodando, fim
  const [estado, setEstado] = useState('Entrada')
  //palpite
  const [palpite, setPalpite] = useState(150)
  const [numPalpites, setNumPalpites] = useState(1)
  const [min, setMin] = useState(0)
  const [max, setMax] = useState(300)
  const iniciarJogo = () =>{
    setEstado('Rodando')
    setMin(0)
    setMax(300)
    setNumPalpites(1)
    setPalpite(150)
  }
  const menor = () =>{
    setNumPalpites(numPalpites+1)
    setMax(palpite)
    const proximo = parseInt((palpite-min)/2)+min
    setPalpite(proximo)
  }
  const maior = () =>{
    setNumPalpites(numPalpites+1)
    setMin(palpite)
    const proximo = parseInt((max-palpite)/2)+palpite
    setPalpite(proximo)
  }
  const acertou = () =>{
    setEstado('Fim')
  }
  if(estado == 'Fim'){
    return(
    <div>
    <p>Acertei o numero {palpite} com {numPalpites} chutes!</p>
    <button onClick={iniciarJogo}>Iniciar novamente</button>
    </div>
    );
  }
  if(estado == 'Entrada'){
    return <button onClick={iniciarJogo}>Começar a jogar</button>
  }
  return (
    <div className="App">
    <p>O seu número é {palpite}?</p>
    <button onClick={menor}>Menor</button>
    <button onClick={acertou}>Acertou</button>
    <button onClick={maior}>Maior</button>

    </div>
  );
}

export default App;

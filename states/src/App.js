import React, {useState} from 'react';
import './App.css';

function App() {
  const [initial, setInitial] = useState('Texto inicial');
  var text = initial;
  let clicked = () =>{
    text = setInitial('Clicou')
  }
  return (
    <div>
      <button onClick={clicked}>click</button>
      <p id="text">{text}</p>
    </div>
  );
}

export default App;

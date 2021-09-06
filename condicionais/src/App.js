import React from 'react'

function App(props) {
  let message;
  if(props.message)
  message = <p>Bem vindo de volta</p>
  else
  message = <p>Efetue o login<br/>Ou <u>Cadastre-se</u></p>
  return (
    <div>
      {message}
    </div>
    
  );
}

export default App;

import React from 'react'

function Msg(props) {
  let message;
  if(props.message)
  message = <p>Bem vindo de volta</p>
  else
  message = <p>Efetue o login<br/>Ou <u>Cadastre-se</u></p>
  return (
    {message}
  );
}

export default App;

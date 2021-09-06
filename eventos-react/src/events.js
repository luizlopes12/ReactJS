import React,{Fragment} from 'react';

const clicked = () =>{
    console.log('Clicou no botão')
}

const Even = () => {
  return (
    <Fragment>
    <button onClick={clicked}>Aperte</button>
    </Fragment>
  );
}

export {Even};

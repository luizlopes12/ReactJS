import React,{Fragment} from 'react';
import  './style.css'
const clicked = () =>{
    let text = document.getElementById('form').value
    let res = document.getElementById('res')
    res.innerText = text
    console.log(text)
}
const Even = () => {
  return (
    <Fragment>
    <input placeholder="Digite algo" id="form" onChange={clicked}/>
    <p id="res"></p>
    </Fragment>
  );
}

export {Even};

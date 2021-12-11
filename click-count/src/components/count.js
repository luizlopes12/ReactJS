import React, {useState, useEffect, Fragment} from 'react';
import './style.css';
function Count(){
    const [contador, setContador] = useState(0)
    let add = () => setContador(contador + 1)
    const getRandomColor = ()=>{
        return "#" + Math.random().toString(16).slice(2,8);
     }
    useEffect(() =>{
        document.title = `Você clicou ${contador} vezes`
        document.body.style.backgroundColor = getRandomColor();
    })
    return(
        <Fragment>
            <div className="cont">
            <p>Você clicou {contador} vezes</p>
            <button onClick={add}>Click</button>
            </div>
        </Fragment>
    )
}
export {Count}
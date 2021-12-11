import React, {useState, useEffect, Fragment} from 'react'
function Count(){
    const [contador, setContador] = useState(0)
    let add = () => setContador(contador + 1)
    useEffect(() =>{
        document.title = `Você clicou ${contador} vezes`
    })
    return(
        <Fragment>
            <p>Você clicou {contador} vezes</p>
            <button onClick={add}>Click</button>
        </Fragment>
    )
}
export {Count}
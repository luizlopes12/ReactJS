import React from "react"
const Tempo = (props) =>{
    const tempo = props.tempo
    const min = Math.round(tempo/60)
    const sec = tempo%60
    const minStr = min < 10? '0'+min: min
    const secStr = sec < 10? '0'+sec: sec
    return(
    <p className="tempo">
    <span>{`${minStr}:${secStr}`} </span><br/>
    Tempo médio por volta
    </p>
    )
  }
  export {Tempo}
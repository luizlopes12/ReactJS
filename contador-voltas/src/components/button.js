import React from "react";
const Button = (props)=> <button className={props.className} onClick={props.action}>{props.text}</button>
export {Button}
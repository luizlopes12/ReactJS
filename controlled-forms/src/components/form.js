import React,{Fragment, useState, useEffect} from 'react';
import {List} from './list'

const Form = () =>{
    const [name, setName] = useState('')
    const handleChange = (event) => {
        setName(event.target.value)
    }
    const sendName = (event) =>{
        event.preventDefault();
    }
    const addName = () =>{
       
    }
    return(
        <Fragment>
            <form onSubmit={sendName}>
                <label htmlFor='name'>Name:</label>
                <input id='name' type='text' value={name} onChange={handleChange}></input>
                <input type='submit' onClick={addName}></input>
            </form>
            <List itens={name}/>
            
        </Fragment>
    )
}
export {Form}
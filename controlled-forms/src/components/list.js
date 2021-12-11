import React,{Fragment, useState, useEffect} from 'react';
const List = (props) => {
    return(
        <Fragment>
            <p>{props.itens}</p>
        </Fragment>
    )
}
export {List}
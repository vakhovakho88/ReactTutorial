import React, {useState} from 'react';





export const NumberButton = (props)=>{
    return (
    <div className="numberButton"
    onClick = {props.click.bind(this,props.children)}
    >{props.children}</div> 
    );
}

export const OperationButton = (props)=>{
    return (
        <div 
        className="operationButton"
        onClick = {props.click.bind(this,props.children)}
        >{props.children}</div> 
    );
}

export const ClearButton = (props)=>{
    return (
        <div className="clearButton" onClick={props.click}>clear</div> 
    );
}


export const Display = (props)=>{
    return (
    <div className="display">{props.children}</div>
    );
}

export const ClearFloating = ()=>{
    return (
        <div className="clearFloating"></div> 
    );
}

export const LeftFloating = ()=>{
    return (
        <div className="leftFloating"></div> 
    );
}
export const RightFloating = ()=>{
    return (
        <div className="rightFloating"></div> 
    );
}
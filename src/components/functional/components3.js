import React, {useState} from 'react';
import Radium from 'radium';
import '../../css/person.css';
//component person
const Person = (props) =>{
    return (
        <div className="Person">
            <p>I am {props.name}</p>
            <p>I am {props.age} years old</p>
            <input type="text" value={props.name} onChange={props.textChange}/> 
            <button onClick={props.clickEvent}>delete</button>    
        </div>
    )
}

export default Radium(Person)
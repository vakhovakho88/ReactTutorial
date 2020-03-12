import React, {useState} from 'react';
import Radium from 'radium';
import styled from 'styled-components';
import '../../css/person.css';

//css modules
import moduleClasses from '../../css/modules.css';

//component person
const PersonWithRadium = (props) =>{

    //media query from radium
    const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
    };

    return (
        <div className="Person" style={style} >
            <p>I am {props.name}</p>
            <p>I am {props.age} years old</p>
            <input type="text" value={props.name} onChange={props.textChange}/> 
            <button onClick={props.clickEvent}>delete</button>    
        </div>
    )
}

//if we use radium anywhere we have to export it with radium
//export default Radium(Person)

//Styled component
//it returns self a component
const SytledDiv = styled.div`
    width: 60%;
    margin: 10px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 3px #ccc;
    padding: 16px;
    text-align: center;

    @media (min-width: 500px) {
        width:450px;
    }
`;


const Person = (props)=>{
    return (
        <SytledDiv>
            <p>I am {props.name}</p>
            <p>I am {props.age} years old</p>
            <input type="text" value={props.name} onChange={props.textChange}/> 
            <button onClick={props.clickEvent}>delete</button>    
        </SytledDiv>
    )

}


const ComponentForCSSModules = ()=>{
    
    return(
        <div className={moduleClasses.innerContainer}>
            <input type="text" className={moduleClasses.text}/>
            <button className={moduleClasses.button}> click me</button>
            {/*button with two classes*/}
            <button className={moduleClasses.button+" "+moduleClasses.secondButtonStyle}> click me</button>
        </div>
    );
}


export default ComponentForCSSModules;





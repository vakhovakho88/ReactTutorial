import React, {useState} from 'react';

//import css style
import '../../css/person.css';

//the function person is static and has no options to change something inside
const personWithoutDynamicContent = ()=> {
    return <p>Hello I am a functional component without any dynamic content</p>;
}


//now lets make some dynamic content
//javascript in jsx must be in {}.
const personWithDynamicContent = () => {
    return <p>Hello i am Person and I am  {Math.floor((Math.random()*30))} years old</p>
}



//now let us make components with parameters.
//we give them parameters dynamically.
//this parameteres are named props
//When using ClassComponents u use this.props
export const PersonWithProps = (props) => {
    return <p> hello i am {props.name} and i am {props.age} old</p>;
}



//let us make a Component that has props and Content between tags too
//props.children   returns content between tags
// and this could be anything in html
// if we dont write anything than it returns an empty <h3>.
export const PersonWithContent = (props) => {

    return (
        <div>
            <h3>{props.children}</h3>
            <p> hello i am {props.name} and i am {props.age}  years old</p>
        </div>
    );
}


// this functional component updates a state in parent component
// the method reference will be given as prop
export const ComponentForStateUpdate = (props) =>{
    return (
        <div>
            <p>{props.text}</p>
            <button onClick={props.clickEvent.bind(this,"I am updated text")}>Update text</button>
        </div>
    );
}



// this is a functional component with hooks (like a state in functional component)
export const ComponentWithHook = () =>
{
    const [myState,myStateMethod] = useState({
        person:[
            { name:"Vakho", age:26 },
            { name:"John", age:50 }
        ],
        anotherState: "Just another state"
    });
    
    //but it replaces everything, and we loose another state
    const changeNameEvent = ()=>{
        //Destructured method
        myStateMethod(
            {
                person: [
                    { name:"Changed Name", age:26 },
                    { name:"John", age:50 }
                ]
            }
        )
    }

    //we are avoiding to loose anotherState with assigning it own value
    const changeNameEvent1 = ()=>{
        //Destructured method
        myStateMethod(
            {
                person: [
                    { name:"Changed Name", age:26 },
                    { name:"John", age:50 }
                ],
                anotherState: myState.anotherState
            }
        )
    }
   
    //but a better idea is to create little atomic states
    const firstName = useState("John");
    const age = useState(30);
    const person = useState({name:"Name1", age:50});

    return (
        <div>
            <p>{myState.person[0].name}</p>
            <button onClick={changeNameEvent}> changeName</button>
        </div>
    )
}

//example of external css
export const PersonWithExternaCSS = (props) =>{
    return (
        <div className="Person">
            <p>I am {props.name}</p>
            <p>I am {props.age} years old</p>
            <input type="text" value="Just a textbox"/>
            
        </div>
    )
}


export default personWithDynamicContent;
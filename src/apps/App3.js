import React, {Component} from 'react';
import Person from '../components/functional/components3';
import Radium,{StyleRoot} from 'radium';
import styled from 'styled-components';
import './../App.css';


// 1.change style object dynamically
// 2. change classname dynamically
// 3. use Radium to use pseudo-selectors.
// 4. media queries.... in functional component
class SimpleApp1 extends Component{
    state = {
        persons:[
            {id:"1", name:"Name1", age:38},
            {id:"2",name:"Name2", age:38},
            {id:"3",name:"Name3", age:38},
            {id:"4",name:"Name4", age:38},
            {id:"5",name:"Name5", age:38}
        ],
        isVisible:false
    }

    nameChangeHandler = (event,id)=>{
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id===id;
        });
        const foundPerson = {...this.state.persons[personIndex]};

        foundPerson.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = foundPerson;

        this.setState({persons: persons});
    }

    
    togleListEvent = ()=>{
        let visibilityState = this.state.isVisible;
        this.setState({isVisible: !visibilityState});
    }
    deletePersonHandler = (index) => 
    {
     
        const persons = this.state.persons.slice(); 
        persons.splice(index,1); 
        this.setState({persons: persons}); 
    }

    render(){
        const style = {
            backgroundColor:'green',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            //Radium pseudo selector here
            ':hover': {
                backgroundColor:'lightgreen', 
                color: 'black'
            }
        };

        let listOfPersons = null;
        if (this.state.isVisible)
        {
            listOfPersons = (this.state.persons.map((person,index)=>{
                return <Person 
                name={person.name} 
                age={person.age} 
                clickEvent={()=>this.deletePersonHandler(index)}
                key = {person.id}
                textChange = {(event)=>this.nameChangeHandler(event, person.id)}
                />
            }));

            // when list is visible let us change styling too (dynamically)
            //it could be changed just as javascript object, cause it is a javascript object
            style.backgroundColor = 'red'; 
            // we can change radium pseudo selector too....
            style[':hover'] = {
                backgroundColor: 'white',
            }


        }

        //empty array to add classes to element
        const classesOfPerson = [] 
        if (this.state.persons.length<=2)
        {
            classesOfPerson.push('red'); // ['red']
        }
        if (this.state.persons.length<=1)
        {
            classesOfPerson.push('bold'); // ['red','bold']
        }


        //dynamically assign classes
        // if count of persons is <= 2 the paragraph must become red
        // if <=1 it must become bold too.
        // we have css styling in app.css
        return (
            <StyleRoot>
            <div>
                <h1>Hi I am React App</h1>
                <p className={classesOfPerson.join(' ')}>The list of persons</p> 
                <button onClick={this.togleListEvent} style={style}>toggle the list</button>
                {listOfPersons}
            </div>
            </StyleRoot>
        );
    }


}
// export default Radium(SimpleApp1);



// Let us make a styled button and use it
const StyledButton = styled.button`
background-color: green;
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
    background-color: lightgreen; 
    color: black;
}
`;
//pseudo selector is called with: &:   example: &:hover

class SimpleApp2 extends Component{
    state = {
        persons:[
            {id:"1", name:"Name1", age:38},
            {id:"2",name:"Name2", age:38},
            {id:"3",name:"Name3", age:38},
            {id:"4",name:"Name4", age:38},
            {id:"5",name:"Name5", age:38}
        ],
        isVisible:false
    }

    nameChangeHandler = (event,id)=>{
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id===id;
        });
        const foundPerson = {...this.state.persons[personIndex]};

        foundPerson.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = foundPerson;

        this.setState({persons: persons});
    }

    
    togleListEvent = ()=>{
        let visibilityState = this.state.isVisible;
        this.setState({isVisible: !visibilityState});
    }
    deletePersonHandler = (index) => 
    {
     
        const persons = this.state.persons.slice(); 
        persons.splice(index,1); 
        this.setState({persons: persons}); 
    }

    render(){
        
        let listOfPersons = null;
        if (this.state.isVisible)
        {
            listOfPersons = (this.state.persons.map((person,index)=>{
                return <Person 
                name={person.name} 
                age={person.age} 
                clickEvent={()=>this.deletePersonHandler(index)}
                key = {person.id}
                textChange = {(event)=>this.nameChangeHandler(event, person.id)}
                />
            }));
        }

        const classesOfPerson = [] 
        if (this.state.persons.length<=2)
        {
            classesOfPerson.push('red'); // ['red']
        }
        if (this.state.persons.length<=1)
        {
            classesOfPerson.push('bold'); // ['red','bold']
        }

        return (
            //calling StyledButton here
            <div>
                <h1>Hi I am React App</h1>
                <p className={classesOfPerson.join(' ')}>The list of persons</p> 
                <StyledButton onClick={this.togleListEvent} >toggle the list</StyledButton>
                {listOfPersons}
            </div>
        );
    }


}





// dynamic styling in style component, as it is just javascript

const StyledButton2 = styled.button`
background-color: ${props=> props.isVisible ? 'red' : 'green'};
font: inherit;
border: 1px solid blue;
padding: 8px;
cursor: pointer;

&:hover {
    background-color: ${props=> props.isVisible ? 'salmon' : 'lightgreen'};; 
    color: black;
}
`;


class SimpleApp3 extends Component{
    state = {
        persons:[
            {id:"1", name:"Name1", age:38},
            {id:"2",name:"Name2", age:38},
            {id:"3",name:"Name3", age:38},
            {id:"4",name:"Name4", age:38},
            {id:"5",name:"Name5", age:38}
        ],
        isVisible:false
    }

    nameChangeHandler = (event,id)=>{
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id===id;
        });
        const foundPerson = {...this.state.persons[personIndex]};

        foundPerson.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = foundPerson;

        this.setState({persons: persons});
    }

    
    togleListEvent = ()=>{
        let visibilityState = this.state.isVisible;
        this.setState({isVisible: !visibilityState});
    }
    deletePersonHandler = (index) => 
    {
     
        const persons = this.state.persons.slice(); 
        persons.splice(index,1); 
        this.setState({persons: persons}); 
    }

    render(){
        
        let listOfPersons = null;
        if (this.state.isVisible)
        {
            listOfPersons = (this.state.persons.map((person,index)=>{
                return <Person 
                name={person.name} 
                age={person.age} 
                clickEvent={()=>this.deletePersonHandler(index)}
                key = {person.id}
                textChange = {(event)=>this.nameChangeHandler(event, person.id)}
                />
            }));
        }

        const classesOfPerson = [] 
        if (this.state.persons.length<=2)
        {
            classesOfPerson.push('red'); 
        }
        if (this.state.persons.length<=1)
        {
            classesOfPerson.push('bold'); 
        }

        //isVisible={this.state.isVisible}
        return (
            <div>
                <h1>Hi I am React App</h1>
                <p className={classesOfPerson.join(' ')}>The list of persons</p> 
                <StyledButton2 onClick={this.togleListEvent} isVisible={this.state.isVisible}>toggle the list</StyledButton2>
                {listOfPersons}
            </div>
        );
    }


}





export default SimpleApp3;

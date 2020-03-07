import React, {Component} from 'react';
import {Person} from '../components/functional/components2';
import './../App.css';

//Print the list of tags condoitionally
// button click toggles the list visibility
// ternary is not necessarily otimal it is not clean
//FIRST WAY

class SimpleApp1 extends Component
{
    state = 
    {
        listVisible : false
    }

   
    togleTheList = ()=>{
        const isVisible = this.state.listVisible;
        this.setState({listVisible:!isVisible});
    }

    render ()
    {
        const styleForTheButton = {
            backgroundColor: 'White',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div>
            <button style={styleForTheButton} onClick={this.togleTheList}>togle the List</button>
            {this.state.listVisible ? 
            <div>
            <Person name="name1" age="30"/>
            <Person name="name1" age="30"/>
            <Person name="name1" age="35"/>
            <Person name="name1" age="35"/>
            <Person name="name1" age="45"/>
            <Person name="name1" age="35"/>
            </div> : null
            }
            </div>
        );

    }
}


// A better way to render something conditionally
class SimpleApp2 extends Component
{
    state = 
    {
        listVisible : false
    }
   
    togleTheList = ()=>{
        const isVisible = this.state.listVisible;
        this.setState({listVisible:!isVisible});
    }

    render ()
    {
        let listOfPersons = null;
        if (this.state.listVisible)
        {
            listOfPersons = (
                <div>
                <Person name="name1" age="30"/>
                <Person name="name1" age="30"/>
                <Person name="name1" age="35"/>
                </div> 
            );
        } 
       
        return (
            <div>
            <button onClick={this.togleTheList}>togle the List</button>
            {listOfPersons}
            </div>
        );

    }
}



//Let su now make an App thap prints persons in iterative way
//With mapping
class SimpleApp3 extends Component
{
    state = 
    {
        persons: [
            {name: 'Name1', age:20},
            {name: 'Name2', age:21},
            {name: 'Name3', age:22},
            {name: 'Name4', age:23},
        ],
        listVisible : false
    }
   
    togleTheList = ()=>{
        const isVisible = this.state.listVisible;
        this.setState({listVisible:!isVisible});
    }

    render ()
    {
        let listOfPersons = null;
        
        if (this.state.listVisible)
        {
            listOfPersons = (
              <div>
                {this.state.persons.map(person=>{
                    return <Person name={person.name} age={person.age}/>
                })}
              </div>
            );
        } 
       
        return (
            <div>
            <button onClick={this.togleTheList}>togle the List</button>
            {listOfPersons}
            </div>
        );

    }
}


class SimpleApp4 extends Component{
    state = {
        persons:[
            {name:"Name1", age:38},
            {name:"Name2", age:38},
            {name:"Name3", age:38},
            {name:"Name4", age:38},
            {name:"Name5", age:38}
        ],
        isVisible:false
    }

    togleListEvent = ()=>{
        let visibilityState = this.state.isVisible;
        this.setState({isVisible: !visibilityState});
    }
    deletePersonHandler = (index) => 
    {
        //it is direct reference without splice, with splice the object is a copy
        const persons = this.state.persons.slice();
        //alternative way,spread operator
        //const persons = [...this.state.persons];

        persons.splice(index,1); // remove 1 element from this index
        this.setState({persons: persons}); 
    }

    render(){
        let listOfPersons = null;
        if (this.state.isVisible)
        {
            listOfPersons = (this.state.persons.map((person,index)=>{
                return <Person name={person.name} age={person.age} clickEvent={()=>this.deletePersonHandler(index)}/>
            }));
           
        }
    
        return (
            <div>
                <button onClick={this.togleListEvent}>toggle the list</button>
                {listOfPersons}
            </div>
        );
    }


}



//Let us assign a KEY to our list elements
// extend state.persons with unique id
// and give key to every component
class SimpleApp5 extends Component{
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

    togleListEvent = ()=>{
        let visibilityState = this.state.isVisible;
        this.setState({isVisible: !visibilityState});
    }
    deletePersonHandler = (index) => 
    {
        //it is direct reference without splice, with splice the object is a copy
        const persons = this.state.persons.slice();
        //alternative way,spread operator
        //const persons = [...this.state.persons];
        
        persons.splice(index,1); // remove 1 element from this index
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
                />
            }));
           
        }
    
        return (
            <div>
                <button onClick={this.togleListEvent}>toggle the list</button>
                {listOfPersons}
            </div>
        );
    }


}


//now let us make a flexible list
// our input in textbox updates name
class SimpleApp6 extends Component{
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

    //change a name in the state
    // id: where to change it
    nameChangeHandler = (event,id)=>{
        //fits find an index in the array of the person
        const personIndex = this.state.persons.findIndex(p=>{
            return p.id===id;
        });

        // select a person with found id, but copy it with spread operator
        const foundPerson = {...this.state.persons[personIndex]};
        // another alternative approach:
        //const foundPerson = Object.assign({},this.state.persons[personIndex]);

        foundPerson.name = event.target.value;
        // copy all persons again and update our selected persons name
        const persons = [...this.state.persons];
        persons[personIndex] = foundPerson;
        //replace it in state
        this.setState({persons: persons});
    }


    togleListEvent = ()=>{
        let visibilityState = this.state.isVisible;
        this.setState({isVisible: !visibilityState});
    }
    deletePersonHandler = (index) => 
    {
        //it is direct reference without splice, with splice the object is a copy
        const persons = this.state.persons.slice();
        //alternative way,spread operator
        //const persons = [...this.state.persons];
        
        persons.splice(index,1); // remove 1 element from this index
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
        return (
            <div>
                <button onClick={this.togleListEvent}>toggle the list</button>
                {listOfPersons}
            </div>
        );
    }


}

export default SimpleApp6;
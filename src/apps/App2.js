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


// A better way to render something conditionalyl
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


export default SimpleApp3;
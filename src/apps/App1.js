import React, {Component} from 'react';
import Person, {PersonWithProps,PersonWithContent,
    ComponentForStateUpdate, ComponentWithHook} 
        from './../components/functional/person1'; 

//just first example of class Component
class SimpleApp extends Component
{
    render(){
        return "I am a simple class component";
    }
}

//it returns Persons with random ages
class SimpleApp2 extends Component
{
    render()
    {
        return (
            <div>
                <Person />
                <Person />
                <Person />
            </div>
            );
    }
}


//components with props
class SimpleApp3 extends Component
{
    render()
    {
        return (
            <div>
                <PersonWithProps name = "John" age="30" />
                <PersonWithProps name = "Jack" age="15"/>
                <PersonWithProps name = "Max" age="50"/>
            </div>
            );
    }
}

//components with props and contents
class SimpleApp4 extends Component
{
    render()
    {
        return (
            <div>
                <PersonWithContent name = "John" age="30">Info about me</PersonWithContent>
                <PersonWithContent name = "Jack" age="15">Info about me</PersonWithContent>
                <PersonWithContent name = "Max" age="50">Info about me</PersonWithContent>
            </div>
            );
    }
}

// states first steps
class SimpleApp5 extends Component
{
   
    //let us make a state
    state = 
    {
        persons: [
            {name:"Name1", age:30},
            {name:"Name2", age:50},
            {name:"Name3", age:35}
        ],
        otherState: 'Some other value'
    }

    render(){
        return (
            <div>
                <PersonWithProps name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <PersonWithProps name={this.state.persons[1].name} age={this.state.persons[1].age}/>
                <PersonWithProps name={this.state.persons[2].name} age={this.state.persons[2].age}/>
            </div>
        );
    }
}


//in this component we would change state with eventhandler
//eventhandler is here without parameters
class SimpleApp6 extends Component
{
    state = {
        persons:[
            {name: "John", age:25},
            {name: "Jack", age:30},
            {name: "Jill", age:45}
        ],
        anotherState: "Test state"
    }

    changeNameHandler = ()=> {
        
        this.setState( {persons:[
            {name: "Leo", age:25},
            {name: "Jack", age:30},
            {name: "Jill", age:45}
        ]});
    }

    render(){
        return (
            <div>
                <PersonWithProps name={this.state.persons[0].name} age={this.state.persons[0].age}/>
                <button onClick={this.changeNameHandler}> change name </button>
            </div>
        )
    }
}


// now lets make an eventhandler with parameters
class SimpleApp7 extends Component
{
    state = {
        member1: 'I am member1',
        member2: 'I am member2'
    };
    
    changeMemberHandler=(newMemberName)=>
    {
        this.setState({
            member1: newMemberName,
            member2: 'I am member2'
        })
    }

    render (){
        return (
            <div>
            <div>{this.state.member1}</div>
            <button onClick={this.changeMemberHandler.bind(this,"my new name")}>change member1</button>
            <button onClick={()=>this.changeMemberHandler("new name")}>change member1</button>
            </div>
        );
    }
}


//this is a component with eventhandler that changes a value of a div, when we change an input of textbox
class SimpleApp8 extends Component
{
    state = {inputText:"Startwert"}
    //event.target.value is a value of event-sender
    textChangedEvent = (event)=>
    {
        this.setState(
            {inputText: event.target.value}
        );
    }
    render(){
        return(
            <div>
                <div>{this.state.inputText}</div>
                <input type='text' onChange={this.textChangedEvent} value={this.state.inputText}/>
            </div>
        );
    }
}



//this component contains state that will be updated from child component.
class SimpleApp9 extends Component
{
    state = {text:"I am a text"};
    
    updateTextEvent = (newText)=>{
        this.setState({text:newText});
    }

    render(){
         return (
         <ComponentForStateUpdate text={this.state.text} clickEvent = {this.updateTextEvent}/>
             );
        }
}

class SimpleApp10 extends Component
{
    render (){
        return <ComponentWithHook />
    }
}


export default SimpleApp10;
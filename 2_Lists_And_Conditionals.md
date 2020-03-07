# Working with Lists and conditional Content

## Print list of contents conditionally

* We have list of Tags
* They must be toggled after button click (Wrapping it and undo)
* Lets do it:
    
    ```js
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
        
            return (
                <div>
                <button onClick={this.togleTheList}>togle the List</button>
                {this.state.listVisible ? 
                <div>
            
                <Person />
                <Person />
                <Person />

                </div> : null
                }
                </div>
            );

        }
    }
    ```

* As we see it, we use ternary Operator here
* We cannot use if operator in the JSX-Javascript block, since it is block based
* but we can use if till JSX Block startes
* Only one root element in the block
* If condition is not true than `null` it means nothing here too.
* **If it is not visible it is not rendered in source code too**


## Second and better way to render something conditionally
* Javascript style
* Ternary operator is not necessarily otimal, since it is not clean

```js
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
```
    * If the boolean variable is true then the div will be rendered, othercase nothing
    * We have seen here that we can use if statement, since we are not in JSX Block 

## Printing lists iterativ
* Same code as above
* only whit this change

```js

if (this.state.listVisible)
{
            listOfPersons = (
              <div>
                {
                    this.state.persons.map(person=>{
                        return <Person name={person.name} age={person.age}/>
                            })}
              </div>
            );
} 

```
* Map goes through all elements and with return we create new array of transformed elements


## Let su make a button that deletes the component from a list

### functional component
```js
<div className="Person">
    {/*another elements*/}

    <button onClick={props.clickEvent}>delete</button>    
</div>
```
### eventhandler in app:
```js
export const Person = (props) =>{
    return (
        <div className="Person">
            <p>I am {props.name}</p>
            <p>I am {props.age} years old</p>
            <input type="text" value="Just a textbox"/> 
            <button onClick={props.clickEvent}>delete</button>    
        </div>
    )
}
```

### app
```js
deletePersonHandler = (index) => {
    const persons = this.state.persons; // direct reference
    persons.splice(index,1); // remove 1 element from this index
    this.setState({persons: persons}); // if we dont do it the UI does't refreshes.
}

// some another code here

let listOfPersons = null;
if (this.state.isVisible)
{
    listOfPersons = (this.state.persons.map((person,index)=>{
        return <Person name={person.name} age={person.age} clickEvent={()=>this.deletePersonHandler(index)}/>
    }));   
}
```
* `clickEvent={()=>this.deletePersonHandler(index)`  we are giving an event to component as parameter
* as we see it, map has two arguments

### Updating state immutably
```js
deletePersonHandler = (index) => 
{
    //it is direct reference without slice, with splice the object is a copy
    const persons = this.state.persons.slice();

    //alternative way,spread operator
    //const persons = [...this.state.persons];

    persons.splice(index,1); // remove 1 element from this index
    this.setState({persons: persons}); 
}
```
* alternative to   `splice()`  is spread operator `const persons = [...this.state.persons];`

## All lists need KEY prop. 
### key must be something unique

* Add to State an unique id
```js
 {id:"1", name:"Name1", age:38},
```
* Add to component `key` prop
```js
<Person 
name={person.name} 
age={person.age} 
clickEvent={()=>this.deletePersonHandler(index)}
key = {person.id}
/>
```

## Change name with user input, using KEY prop
* In our person component:
```js
<input type="text" value={props.name} onChange={props.textChange}/> 
```

* Component Tag:
```js
textChange = {(event)=>this.nameChangeHandler(event, person.id)}
```

* Eventhanler:
```js
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
```
* It means, steps to update state on selected index is:
    * Find index where it is located
    * Copy element
    * Update element
    * Copy whole branch of state
    * Update element in a copy
    * Replace a branch in the state with a copy

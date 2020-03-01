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
* Map goes through all elements and wit return we create new array of transformed elements
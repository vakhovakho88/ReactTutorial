# Styling react components

### Changing style object dynamically

* let us say we have a style object for a button, in render...

```js
 const style = {
    backgroundColor:'green',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
};
```

* Change a style dynamically is possible just normal with javascript, cause this is a normal javascript object.

```js
//for example if our list is visible we want a button to be red
style.backgroundColor = 'red'; 
//it was all
```
* When the list is not visible it will become green again, only in case if the style object is in `render()`
* It is very logicall too, style will be created again and since the visibility is false, the style object will not be changed.
* But if it is outside the render() it will be generated only once...
* IT MEANS EVERYTHING IN `RENDER()` will be generated everytime we make any change


### Assign class dynamically
* let us assume we want next scenario
    * If count of persons is less than or equals to 2 the peragraph must be red
    * And if count of persons is less than or equals to 1 the paragraph must be bold too
* We are making CSS styling, CSS file:
```CSS
.red{
  color: red;
}
.bold{
  font-weight: bold;
}
```

* Javascript file
```js
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
```
* Add class to element
```js
<p className={classesOfPerson.join(' ')}>The list of persons</p>
```
* As we see it it can have 0 classes or more classes
* As render reloads everytime after we delete some elements we see how it changes style dynamically

## Radium- possibility to have pseudo selectors and media queries in js inline styling

### install:  `npm install --save radium`
### import: `import Radium from 'radium'`
### export every component wich uses Radium: `export default Radium(SimpleApp1)`

* Add Radium hover pseudo-selector to our old styling
```js
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
```
* It just a normal javascript object, thats why we can change it exactly so, we changed our another style object.
```js
 style[':hover'] = {
    backgroundColor: 'white',
}
```
* In this case in our example:
    * If the list is visible: hover => backgroundColor:'lightgreen'
    * If the lits is invisible:  hover => backgroundColor:'white'

## Using Radium to have media queries

* To use Media Queries with redium we have to load `StyleRoot` component from radium class in our root component
* Then we have to insert our whole return tags in this Styleroot component
```js
import Radium,{StyleRoot} from 'radium';
//...

 return (
    <StyleRoot>
        <div>
            something to return
        </div>
    </StyleRoot>
);

```

* Our media query in functional component
```js

const Person = (props) =>{

    //media query
    const style = {
        '@media (min-width: 500px)': {
            width:'450px'
        }
    };

    return (
        <div className="Person" style={style} >
        </div>
    )
}

```
* As we see it is enough to assign just a whole object, without the key of inner object.
* U can have more objects inside it too.
* Till it is bigger then 500px the width of the div is fixed 450px.

## Styled components
* this is a library and we must install it `npm install --save styled-components`
* To use it we must remove all Radium keywords and export convertings, since it is css world
* The website is: `https://styled-components.com/`
* Import styled component:
```js
import styled from 'styled-components';
```

* Usage:
```js

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

```
* All html tags can be used so. Example:
    * styled.div``
    * styled.button``
    * ...
* Styled components generate css in head and assigns temprorary class-names to components.
* To have pseudo selectors inside Styled components we have to use: `&:`
```js
&:hover {
    background-color: lightgreen; 
    color: black;
}
```
* This components can be just normally changed from javascript and all features of tags can be used.
* We can have styled components in separate files or we can create global file with styled components.

## Styled components and dynamic styles

* Decision making in styled component, as it is just javascript
```js

const StyledButton2 = styled.button`
    background-color: ${props=> props.isVisible ? 'red' : 'green'};
    font: inherit;
    border: 1px solid blue;

    &:hover {
        background-color: ${props=> props.isVisible ? 'salmon' : 'lightgreen'}; 

    }
`;

// ${props=> props.isVisible ? 'red' : 'green'}
// ${props=> props.isVisible ? 'salmon' : 'lightgreen'}

```
* As we see it we can give to styled component just normal props
```js
<StyledButton2 isVisible={this.state.isVisible}>toggle the list</StyledButton2>
```
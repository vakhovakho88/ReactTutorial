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

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


## CSS Modules
* It is relatively new concept 
* With CSS modules u can write a CSS code and make Sure, that it only applies a given component.
* The magic behind is, that it automatically generates unique classNames.
* When we import it it assigns to our chosen components this unique class names and whole styling behind them.

### Configure CSS Modules
* If we are using `react-scripts`<2.0 than we need to:
    * run: `npm run eject`
    * Then go to: `config\webpack.config.dev.js`
    * And find this scope:
    ```json
     test: /\.css$/,
            use: [
              require.resolve('style-loader'),
              {
                loader: require.resolve('css-loader'),
                options: {
                  importLoaders: 1,
                  modules: true,
                  localIndentName: '[name]__[local]__[hash:base64:5]'
                },
              },
    ```
    * The Last two items are added now....
    * Add this two items in `config\webpack.config.prod.js` too.
    ```json
            use: [
                {
                    loader: require.resolve('css-loader'),
                    options: {
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: shouldUseSourceMap,
                    modules: true,
                    localIndentName: '[name]__[local]__[hash:base64:5]'
                    },
                },
    ```
    * Thats it
* If u use later versions of react script as 2.x than u only need to change name of CSS file to: `filename.module.css` 


### Using css modules
* Import 
    ```js

    //css modules
    import moduleClasses from '../../css/modules.css';

    ```
* Little part from css file
```css

.button {
    width:200px;
    height: 50px;
}
.button.secondButtonStyle{
    background-color: blue;
}

.text {
    width:200px;
    height: 50px;
}
.text:hover{
    background-color: blue;
}

```

* Assign it to component
    ```js
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
    ```

* As we mentioned in this case a total unique className will be generated
* If we try just to access CSS styling with the naming from file it shouldnot work.
* It means every generated CSS className cannot be used in another component accidentally
* By the way, if you somehow also want to define a global (i.e. un-transformed) CSS class in such a .css  file, you can prefix the selector with `:global`. Example: `:global .Post { ... }`
* Then u can use it just normall


# Debugging and Error
* U can Debug code with chrome developer tools -> resources...
* Or alternatively: React developer tools
* U can check every components there can see values of props and can change the values too
* If u change values UI changes too

## Error Boundary
* Just a class that we are creating
```js

import React, {Component} from 'react';

class ErrorBoundary extends Component{

    state = {
        hasErrors:false,
        errorMessage: ''
    }

    //this is a function from standard function from library that catches an error
    componentDidCatch=(error, info)=>{
        this.setState({hasErrors:true, info:error})
    }
    render(){
      if (this.state.hasErrors){
          return <h1>{this.state.errorMessage}</h1>
      }
      else
      {
          return this.props.children;
      }
    }
}
export default ErrorBoundary;

```

* `componentDidCatch` this function would be called automatically and this is a key
* We just wrap whole output inside this component tags. 
    * If there does not occur any error then: `this.props.children;` outputs the normal output
    * In another case only error message.
* This means if user receives any error, he cannot see rests of component, he sees only the error message
* Let us mention, this is class cmponent and as we see it a `class component has props too`. Without any extra props parameter.

## Very important: in Developer mode the error handling from ErrorBoundary is not active. It only appears in Production.

### Just another example how to throw an error, but without boundary the user sees tags too.
```js

const rnd = Math.random();
if (rnd<0.7)
{
    throw new Error("Something went rong");
}

```

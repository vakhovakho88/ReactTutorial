### Statefull component vs Stateless Component

* `stateless component` is a functional components that has no state management
    * Sinonyms: Dumb/Presentational components
* `statefull component` components with State management
    * Also called: container, smart component  
* `very important:` to make an app easier to maintain and manage avoid having many
  statefull components. We schould have as many stateless components as possible and States must be easy reachable if we want to change them.


### Change a state located in Class from the child, functional component

* We can just send an eventhandler that is located in the class component to functional component
* Than we can call the eventhanler from the functional component


passing an argument to a function from eventhandler 2 ways

switchNameHanlder.bind(this,"changedNameFromClick")




two side binding

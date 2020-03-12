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
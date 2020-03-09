import React, {Component} from 'react';
import {NumberButton, OperationButton,ClearButton, Display,ClearFloating, LeftFloating} from '../components/functional/CalculatorFields';
import '../css/calculator.css';

class Calculator extends Component{
    state = {
        buttons: [
            {id:"displ", class:"displ", value:""},

            {id:"clear",class:"clear",value: "clear"},
            {id:"div",class:"opp",value: "/"},

            {id:"clFloat1",class:"clearFloat",value:""},
           
            {id:"7",class:"num",value: "7"},
            {id:"8",class:"num",value: "8"},
            {id:"9",class:"num",value: "9"},
            {id:"minus",class:"opp",value: "-"},

            {id:"clFloat2",class:"clearFloat",value:""},

            {id:"4",class:"num",value: "4"},
            {id:"5",class:"num",value: "5"},
            {id:"6",class:"num",value: "6"},
            {id:"plus",class:"opp",value: "+"},

            {id:"clFloat3",class:"clearFloat",value:""},

            {id:"1",class:"num",value: "1"},
            {id:"2",class:"num",value: "2"},
            {id:"3",class:"num",value: "3"},
            {id:"mult",class:"opp",value: "*"},

            {id:"clFloat4",class:"clearFloat",value:""}
        ],
        displayValue: ""
    }
    
    changeDisplayValueHanlder = (newValue)=>{
        let actualValue = this.state.displayValue;
        actualValue+=newValue;
        this.setState({displayValue: actualValue});
    }
    clearTheDisplay = () =>{
        this.setState({displayValue: ""});
    }


    render()
    {
        let allElements = (
            this.state.buttons.map(btn=>{
                return (
                    btn.class==="displ" ? <Display>{this.state.displayValue}</Display>  :
                    btn.class==="num" ? <NumberButton click={this.changeDisplayValueHanlder}>{btn.value}</NumberButton> :
                    btn.class === "clear" ?   <ClearButton click={this.clearTheDisplay}></ClearButton>      :
                    btn.class === "opp" ? <OperationButton click={this.changeDisplayValueHanlder}>{btn.value}</OperationButton> : 
                    btn.class === "clearFloat" ? <ClearFloating/> : null

                );
            })
        );
    

        return (
            <div>

            {/* <Display>{this.state.displayValue}</Display>
            <LeftFloating></LeftFloating>
           
            <ClearButton click={this.clearTheDisplay}></ClearButton>
            
            
            <OperationButton click={this.changeDisplayValueHanlder}>/</OperationButton>


            <ClearFloating/>
           
            <NumberButton click={this.changeDisplayValueHanlder}>7</NumberButton>
            <NumberButton click={this.changeDisplayValueHanlder}>8</NumberButton>
            <NumberButton click={this.changeDisplayValueHanlder}>9</NumberButton>
            <OperationButton click={this.changeDisplayValueHanlder}>-</OperationButton>
            <ClearFloating/>
            <NumberButton click={this.changeDisplayValueHanlder}>4</NumberButton>
            <NumberButton click={this.changeDisplayValueHanlder}>5</NumberButton>
            <NumberButton click={this.changeDisplayValueHanlder}>6</NumberButton>
            <OperationButton click={this.changeDisplayValueHanlder}>+</OperationButton>
            <ClearFloating/>
            <NumberButton click={this.changeDisplayValueHanlder}>1</NumberButton>
            <NumberButton click={this.changeDisplayValueHanlder}>2</NumberButton>
            <NumberButton click={this.changeDisplayValueHanlder}>3</NumberButton>
            <OperationButton click={this.changeDisplayValueHanlder}>=</OperationButton>
            
             */}
            
            {allElements}
           
            </div>
        )
    }
}

export default Calculator;
/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-12-01T12:42:57-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: Calculator.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-12-01T12:47:05-05:00
 */


import React from "react"

//Importing screen nested in calculator
import Screen from "./Screen/Screen.js"
import Keypad from "./Keypad/Keypad.js"



class Calculator extends React.Component {
  
  state = {
    equation: '',
    result: 0
  }
  
  //Calculator Logic:
  onButtonPress = event => {
    let equation = this.state.equation
    const pressedButton = event.target.innerHTML
    
      if(pressedButton == 'C'){
        return this.clear()
    }
    //building the number
    else if((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.'){
       equation+=pressedButton
    }
    //opperations
    else if(['+','-','*','/','%'].indexOf(pressedButton)!=-1) equation += ' ' + pressedButton + ' '
    else if(pressedButton === '='){
      try{
        var evaluatedResult = eval(equation)
        const result = Number.isInteger(evaluatedResult)? evaluatedResult : evaluatedResult.toFixed(2)
        this.setState({result});
      }
       catch (error) {
        alert('Invalid Mathematical Equation');
        }
      }
    else {
      equation = equation.trim();
      equation = equation.substr(0, equation.length - 1);
    }
                
    this.setState({equation: equation});
    } 

    //Clearing the screen
    clear() {
      this.setState({equation: '', result: 0});
  }

  render() {
    return(
      <main className="calculator">
        <Screen equation={this.state.equation} result={this.state.result}/>
        <Keypad onButtonPress={this.onButtonPress}/>
      </main>
    )
  }
}

export default Calculator

/**
 * @Author: Alex Shelton <zoso>
 * @Date:   2019-11-27T22:35:23-05:00
 * @Email:  as305218@ohio.edu
 * @Filename: App.js
 * @Last modified by:   zoso
 * @Last modified time: 2019-12-01T12:31:28-05:00
 */


import React from "react"
//----------Styling---------------------//
import "./Styles/style.css"
//---------Custom Components------------//

//------------Calculator------------//
import Calculator from "./Layout/Calculator.js"
//-----------Screen-----------------//
import Screen from "./Layout/Screen/Screen.js"
import ResultScreen from "./Layout/Screen/ResultScreen.js"
import ComputationalScreen from "./Layout/Screen/ComputationalScreen.js"
//--------------Keypad----------------//
import Keypad from "./Layout/Keypad/Keypad.js"
import KeypadRow from "./Layout/Keypad/KeypadRow/KeypadRow.js"
//--------------Buttons----------------//
import Button from "./Components/Buttons/Button.js"

//Import Graph from "./Layout/Graph"


function App(){
  return(
    <div className="app">
      <Calculator/>
    </div>
  )
}


export default App;

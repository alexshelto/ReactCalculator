
import React from "react"
//----------Styling---------------------//
import "../../Styles/style.css"
//---------Custom Components------------//


//------------Calculator------------------------------------------------------------
//Screen
import Calculator from "../Calculator.js"
import Screen from "../Screen/Screen.js"
import ResultScreen from "../Screen/ResultScreen.js"
import ComputationalScreen from "../Screen/ComputationalScreen.js"
//Keypad
import Keypad from "../Keypad/Keypad.js"
import KeypadRow from "../Keypad/KeypadRow/KeypadRow.js"
//Buttons
import Button from "../../Components/Buttons/Button.js"
import GraphingWindow from "./GraphingWindow/GraphingWIndow"
//-------------------s------------------------------------------------------------------


class Window extends React.Component {
    render(){
        return(
            <main className='window'>
                <Calculator/>
                <GraphingWindow/>
            </main>
        )
    }
}


export default Window
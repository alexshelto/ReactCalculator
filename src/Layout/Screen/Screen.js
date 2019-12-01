
import React from "react"
import ComputationalScreen from "./ComputationalScreen"
import ResultScreen from "./ResultScreen"

function Screen(props){
    return(
        <div className="screen">
            <ResultScreen>{props.result}</ResultScreen>
            <ComputationalScreen>{props.equation}</ComputationalScreen>
        </div>
    )
}


export default Screen
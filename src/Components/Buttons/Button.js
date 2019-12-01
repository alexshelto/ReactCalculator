

import React from "react"


function Button(props){


    return(
        <button className="button" onClick={props.onButtonPress}>
            {props.children}
        </button>
    )

}


export default Button
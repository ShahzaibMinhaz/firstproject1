import React from 'react'

function Dinner (props){
    return (
        <div>
            <h1>My favourite dish is {props.Name}</h1>
            <h1>Sweet Dish {props.SwName}</h1>
        </div>
    )
}

export default Dinner
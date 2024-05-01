//Sample Program to see usage of useState hook and seeing updated value rendered on state change

import React,{ useState } from "react";

//Utilizing the 'useState' hook in functional component :NumberState

function NumberState(){
    //Declaring and using useState hook to initialize a state variable called 'number' with a starting value of '0'.
    let [number,setNumber] = useState(0);

    //function to increment the number by 1.
    function incrementNumber(){
        setNumber(number+1);
    }

    //function to decrement the number by 1.
    function decrementNumber(){
        setNumber(number-1);
    }

    //function to reset the number to initial value 0.
    function resetNumber(){
        setNumber(0);
    }

    //Below block return and renders the current state 'number' and buttons 
    //Handling user interactions with event listeners, example: onClick events used below
    return (
            <div>
                <h1>Example of "useStage" usage in ReactJS to manipulate Stage of Number:</h1>
                <h1>{number}</h1>
                <button onClick={incrementNumber}> Increment</button>
                <button onClick={decrementNumber}> Decrement</button>
                <button onClick={resetNumber}> Reset</button>                
            </div>
        );

}

export default NumberState;

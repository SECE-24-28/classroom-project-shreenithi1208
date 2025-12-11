import {useState} from "react";
const State=()=>{
    const [state,updateState]=useState("State Component");
    const setState = ()=>{
        updateState("Updated State Component");
    }
    return(
        <div>
            <p>This is the {state}</p>
            <button onClick={setState}>Update</button>
        </div>
    );
};
export default State;
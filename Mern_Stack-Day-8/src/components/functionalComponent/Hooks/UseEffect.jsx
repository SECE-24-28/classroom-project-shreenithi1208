import {useEffect,useState} from "react";
const UseEffect=()=>{
     const[text,updateText]=useState("Hello");
     useEffect(()=>{
        console.log("Text changed:", text);
     },[text]);
   return(
    <div>

    <h2>This is Use Effect Hook </h2>
    <input type="text" 
    value={text}
    onChange={(e)=>{
        updateText(e.target.value);
    }}
    />
    <p>Current text: {text}</p>
    </div>
   )
}
export default UseEffect;
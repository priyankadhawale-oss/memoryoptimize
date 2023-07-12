import { useState } from "react";
//import { useCallback } from "react";
import Achild from "./Achild";

const Usecallback=()=>{
    const[set,setcount]=useState(0);
    const[sub,setsub]=useState(100);
    function incrementhandler()
    {
        setcount(set+1);
    }
    function decrementHandler()
    {
        setsub(sub-1);
    }
    const demo=()=>{
        
    }
   /* const demo=useCallback(()=>{

   },[]) */
    return(
        <>
        <Achild learn={demo}/>
        <h2>add={set} </h2>
        <button onClick={incrementhandler} >increment</button>
        <h2>sub-{sub}</h2>
        <button onClick={decrementHandler}>decrement</button>
        </>
    );
}
export default Usecallback;
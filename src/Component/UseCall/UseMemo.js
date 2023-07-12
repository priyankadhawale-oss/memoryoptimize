import { useMemo } from "react";
import { useState } from "react";

const UseMemo=()=>{
    const [add,setadd]=useState(0);
    const [sub,setsub]=useState(100);

    const incrementhandler =()=>{
        console.log("add function called");
        setadd(add+1);
    }

    const demo = useMemo(function abc  ()  {
        console.log("fucntion recreate...!!")
        return add * 10
    },[add])
    /* const incrementhandler=useMemo(()=>{
        setadd(add+1);
    },[])
     */
    const decrementhandler=()=>{
        console.log("decrement called");
        setsub(sub-1);

    }
    /* const decrementhandler=useMemo(()=>{
        setsub(sub-1);
    },[]) */
   // console.log("i am in usememo")
    return(
        <>
        <h3>add={add} & Multiply : {demo}</h3>
        <button onClick={incrementhandler}>increment</button>
        <h2>sub={sub}</h2>
        <button onClick={decrementhandler}>decrement</button>
        </>
    );
}
export default UseMemo;
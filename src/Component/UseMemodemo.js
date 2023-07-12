import { useMemo, useState } from "react";


const UseMemodemo=()=>{
    const[add,setadd]=useState(0);
    const[sub,setsub]=useState(100);

    /* function demo()
    {
        console.log("hello");
        return add*5;
    } */
    const demo=useMemo(()=>{
        console.log("I am demo function");
        return add*5;
    },[add])

    return(
        <>
        <h3>I am usememo()</h3>
        <h2>add={add} & mulitiply={demo}</h2>
        <button onClick={()=>setadd(add+1)}>add</button>
        
        <h2>sub={sub} </h2>
        <button onClick={()=>setsub(sub-1)}>sub</button>
        </>
    );
}
export default UseMemodemo;
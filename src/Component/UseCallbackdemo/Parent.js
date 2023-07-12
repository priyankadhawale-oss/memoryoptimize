import { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";
//import Usecallback from "../UseCall/Usecallback";

const Parent=()=>{
    const[age,setage]=useState(25);
    const[salary,setsalary]=useState(30000);

    const incrementage=useCallback(()=>{
        setage(age+1);
    },[age])
     
    const incrementsalary=useCallback(()=>{
        setsalary(salary+5000);
    },[salary])
    return(
        <>
        <h2>Welcome to react app</h2>
        <Title/>
    
        <Count text="Age" count={age}/>
        <Button handleClick={incrementage}>Increment Age</Button>
        <Count text= "Salary" count={salary}/>
        <Button handleClick={incrementsalary}>Increment Salary</Button>
        </>
    )
}
export default Parent;
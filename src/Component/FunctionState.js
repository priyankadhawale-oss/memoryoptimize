 import {useState} from 'react';


 const FunctionState= ()=>{
    
    const [name,setname]=useState("priyanka");
    const[company,setcompany]=useState("tata elxsi");
    const [empID, setEmpID]=useState("543567");
    const [email,setemail]=useState("priyanka@gmail.com");
    const[mobile,setmobile]=useState('9876543456');
   
    function Functionhandler(){

        setname("priyanshi"),
        setcompany("facebook"),
        setEmpID("8760"),
        setemail('priyanshi@gmail.com'),
        setmobile('9876546780')
    
}   

    return(
        <>
        
        <h1>{name}</h1>
        <h2>{company}</h2>
        <h2>{empID}</h2>
        <h2>{email}</h2>
        <h2>{mobile}</h2>
        <button onClick={Functionhandler}>update</button>
        
        </>
    );
 }
 export default FunctionState;
import { useState } from "react";

const User=()=>{
   const[Login, setLogin]=useState(true)
   function Loginhandler(){
    setLogin(true);
   }
   function Logouthandler(){
    setLogin(false)
   }
   if(Login)
   {
    return(
        <>
        <h2>welcome to login handle comp</h2>
       <h2>Welcome user</h2>
       <button onClick={Logouthandler}>Logout</button>
        </>
    )
   }
   else{
    return(
        <><h2>Please login</h2>
        <button onClick={Loginhandler}>Login</button>
        </>
    )
   }
}
export default User;
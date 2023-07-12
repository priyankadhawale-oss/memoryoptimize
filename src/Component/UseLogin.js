import React, { useState } from 'react'

/* function UseLogin() {
    const[Loggedin,setLoggedin]=useState(false);
    function LoginHandle()
    {
        setLoggedin(false);
    }
    function LogoutHandle(){
        setLoggedin(true);
    }
  return (
    
    <div>
        {
            Loggedin ? 
              ( 
              <div> 
                    <h2>welcome here</h2>
                    <h2>Login page is here</h2>
                    <button onClick={LoginHandle}>Login</button>
            </div>
            ):(
                <div>
                    <h2>welcome here</h2>
                    <h2>Please Log in</h2>
                    <button onClick={LogoutHandle}>Logout</button>
                </div>

            )
        }
    </div>
    
  )
} */

const UseLogin=()=>{
    const[Loggin,IsLoggin]=useState(false);


    return(
        <div>
            {
                Loggin ? 
                (
                    <div>
                        <h2>welcome here</h2>
                        <h2>Login page is here</h2>
                    </div>
                ):(
                    <div>
                        <h2>welcome here</h2>
                        <h2>Please Log in</h2>
                    </div>
                )
            }
            <button onClick={()=>IsLoggin(!Loggin)}>
                {
                    Loggin ? "Log out" :" Login"
                }
            </button>
        </div>
    )
}
export default UseLogin;
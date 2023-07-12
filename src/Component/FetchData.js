import { useEffect, useState } from "react";

const FetchData=()=>{

const [user,setuser]=useState([]);
    useEffect(()=>{
       async function Data()
        {
            const response =await fetch("http://localhost:8003/client");
           console.log(response);
            const result=await response.json();
            console.log(result);
            setuser(result);

        }
        Data();
    },[])
    return(
        <>
        <h2>details</h2>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Mobile</th>
                </tr>
                </thead>
                <tbody>
                    {
                        user.map(u=>{
                            
                            return(
                                <tr>
                                <td>{u.name}</td>
                                <td>{u.id}</td>
                               <td>{u.mo}</td>
                               </tr>   
                            )
                            
                        })
                    }
                </tbody>
            
        </table>
        </>
    );
}
export default FetchData;
import { useReducer } from "react";
const initialState={
    msg:"I Am Reducer",
    name:'priyanka',
    empid:6789,
    mo: '0987689093',
    email:'priyanka@gmail.com'
   
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'updatestate':
            return{
                
                ...state,
                msg:'i am updated state',
                name:'shiva',
                empid:98765,
                mo:'987657833',
                email:'shiva@gmail.com'
            }
        default:
            return 0;
    }
    
}
const UseReducer=()=>{
    const[state,dispatch]=useReducer(reducer,initialState)
    
    const updateHandler=()=>{
        dispatch({type:'updatestate'});
    }
    return(
        <>
        {/* <h2>I Am Reducer ()</h2> */}
        {/* <h3>
            Name:{initialState.name}<br/>
            Employee ID:{initialState.empid}<br/>
            Mobile:{initialState.mo}<br/>
            Email:{initialState.email}
        </h3> */}
       
        <h3>
           <h2> {state.msg}</h2>
             Name:{state.name}<br/>
            Employee ID:{state.empid}<br/>
            Mobile:{state.mo}<br/>
            Email:{state.email}
        </h3>
        
        <button onClick={updateHandler}>update</button>
        </>
    );
}
export default UseReducer;
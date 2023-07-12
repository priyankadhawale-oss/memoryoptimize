import { useReducer } from "react";
const initialstate=5;
const UseReduceDemo=()=>{
    const reducer=(state,action)=>{
        switch(action.type){
            case 'increment':
                return state+1;
            case 'decrement':
                if(state>0){
                    return state-1;
                }
                else{
                return 0;
                }
            case 'reset':
                return 0;

            default:
                return state;

        }

    }
    function incrementhandler()
    {
        dispatch({type:'increment'})
    }
    function decrementHandler()
    {
        dispatch({type:"decrement"})
    }
    function resethandler()
    {
        dispatch({type:"reset"})
    }
    const[state,dispatch]=useReducer(reducer,initialstate)
    return(
        <>
        <h2>I am counter reducer</h2>
        <h2>{state}</h2>
        <button onClick={incrementhandler}>increment</button>
        <button onClick={decrementHandler}>decrement</button>
        <button onClick={resethandler}>reset</button>
        </>
    );
}
export default UseReduceDemo;
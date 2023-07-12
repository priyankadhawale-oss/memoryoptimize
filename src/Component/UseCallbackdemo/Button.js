import { memo } from "react";
const Button=({handleClick,children})=>{
    console.log(`rendering button - ${children}`);
    return(
        <>
        <button onClick={handleClick}>{children}</button>
       
        </>
    )
}
export default memo(Button);
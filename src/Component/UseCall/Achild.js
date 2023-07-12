import { memo } from "react";
const Achild=()=>{
    console.log("A child");
    return(
        <>
        <h3>I am A child</h3>
        </>
    );
}

export default memo(Achild);
import { memo } from "react";
const Title=()=>{
    console.log("rendering title");
    return(

        <>
        <h2>Usecallback hook</h2>
        </>
    );
}
export default memo(Title);
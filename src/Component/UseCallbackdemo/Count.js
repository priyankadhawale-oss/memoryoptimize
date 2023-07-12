import { memo } from "react";
const Count=({text,count})=>{
    console.log(`rendering count- ${text} - ${count}`)
    return(
        <>
        <h2>i am in count comp</h2>
        <h3>{text}-{count}</h3>
        </>
    );
}
export default memo(Count);
import React, {useState} from "react";
import UseCountHook from "./UseCountHook";
const CustomCounter = () => {
    const [count, setCount]= useState(1)
    UseCountHook(count)
    return (
        <>
        <h1>{count}</h1>
            <button className="btn" onClick={()=> setCount(count+1)}>click {count} times</button>
        </>
    );
}

export default CustomCounter;
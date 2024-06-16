import React, { useState } from "react";
import UseCountHook from "./UseCountHook";


const Counter=()=>{

    const [count, setCount]= useState(0)
   //  const [name, setName]= useState('')
   //   useEffect(()=>{
   //      document.title=`you clicked ${count} times`
   //   },[count])

    UseCountHook(count)
      

  return(
    <>
    <div className="wrapper">
     {/* <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input> */}
    <button className="btn" onClick={()=> setCount(count+1)}>click {count} times</button>
    </div>
     </>
  )
}

export default Counter
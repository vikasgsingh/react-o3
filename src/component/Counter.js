import React, { useState } from "react";

const Counter = () => {
    let [no, setvalue] = useState(1);

  

       const increament=()=>{
        setvalue(no++);

       }

       const decreament=()=>{
        setvalue(no--)
         
       }

  return (
    <>
      
      <h2>{no}</h2>

      <button onClick={()=>increament()}>add</button>
       <button onClick={()=>decreament()}>minus</button>
    </>
  );
};

export default Counter;

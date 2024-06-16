import React, { useState, useEffect } from "react";

const Count = () => {
  const [number, SetNumbers] = useState(1);
  const [number2, SetNumbers2] = useState(1);

 
  const increament = () => {
    SetNumbers(number+1)
  }

  const decreament = () => {
    SetNumbers(number>0? number-1: 1)
}

  useEffect(()=>{
       console.log('useEffect with no dependency')
  })

  useEffect(()=>{
       console.log("useEfect with empty Array")
  },[])


  useEffect(()=>{
     console.log("useEffect with dependency")
  },[number])
  
  useEffect(()=>{
    console.log("useEffect02 with dependency")
 },[number],[number2])


  return (
    <>
      <h1>Counter</h1>

      <div className="btn-wrap">
      
      <button className="sm-btn" onClick={decreament}>
          -
      </button>

        <h2>{number}</h2>

        <button className="sm-btn" onClick={increament}>
          +
        </button>
        
      </div>

    </>
  );
};

export default Count;

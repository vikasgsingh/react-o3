import React, {useState} from "react";

const Toggle=()=>{
  
    const [name, SetName]= useState('vikas');
      
    const update=()=>{
       
       let x=name;
         if(x=='vikas'){
            SetName('abhay')
         }
         else{
            SetName('vikas')
         }
       
          
   
    }

  return(
    <>
    <h2>{name}</h2>
     <button className="btn" onClick={update}>click me</button>
    </>
  )
}

export default Toggle
import React, {useState} from "react";

const Add =()=>{

    const [numbers, SetNumbers]= useState([])

     const adddata=()=>{
        SetNumbers(prev=>[...prev, prev.length>0 ? prev[prev.length-1]+1 : 1])
     }

     const deleteItem=(item)=>{
         let x=[...numbers];
         x.splice(item, 1)
         SetNumbers(x)
     }

   return(
    <>
       <h1>counter</h1>
        {
            numbers.map((item, index)=>{
                return(
                    <h2 key={index} className="btn btn01" onClick={()=>deleteItem(index)}>{item}</h2>
                )
            })
        }
        <button className="btn" onClick={()=>adddata()}>add-more</button>
    </>
   ) 
}

export default Add
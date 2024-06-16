import React,{ useState } from "react";

const  Block=()=>{
    let [data, Setdata]=useState('hello there')
    let change=()=>{
          Setdata('thanks for subscribe')
    }
   return(
    <>
    <h2>{data}</h2>
    <button onClick={()=>change()}> click me</button>
    </>
   )
       
         
}

export default Block
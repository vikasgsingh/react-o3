import React, { useState } from "react";


function NumberList() {
    const [numbers, SetNumbers]=useState([])  
    const update=()=>{
        SetNumbers(prev=>[...prev, prev.length> 0 ? prev[prev.length-1] + 1 : 1])
        
      }

    const handleDelete = (item) =>{
        console.log("itemindex",item)
        let x = [...numbers]
        x.splice(item, 1)
        SetNumbers(x)
    }
    return (
       <>
       {
        numbers.map((item, index)=>{
          return (
           <h2 key={index}> <button onClick={()=>handleDelete(index)} className="btn btn01">{item}</button></h2>
          )
          
        })
       }
        <button type="button"  className="btn" onClick={update}>click </button>
       </>
       
    );
  }
  
  

  export default NumberList;



// import React, { useState } from "react";

// function NumberList() {
//     const [numbers, setNumbers] = useState(new Set());
//     const [counter, setCounter] = useState(1);

//     const update = () => {
//         setNumbers(new Set([...numbers, counter]));
//         setCounter(counter + 1);
//     }

//     const handleDelete = (number) => {
//         const updatedNumbers = new Set(numbers);
//         updatedNumbers.delete(number);
//         setNumbers(updatedNumbers);
//     }

//     return (
//         <>
//             {[...numbers].map((item, index) => (
//                 <h2 key={index}>
//                     <button onClick={() => handleDelete(item)} className="btn btn01">{item}</button>
//                 </h2>
//             ))}
//             <button type="button" className="btn" onClick={update}>Click</button>
//         </>
//     );
// }

// export default NumberList;

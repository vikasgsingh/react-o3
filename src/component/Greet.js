import react, { useState } from "react";

const Greet = (props) => {
    // const [message, setMessage] = useState("Welcome here");

          const {name}=props

  return (
    <>
      <h2>Hello {name}</h2>

         
         {/* <h2>{message}</h2> */}

         {/* <h3><button onClick={()=>setMessage('hello vikas') }>click me!</button></h3> */}
    </>
  );
};
export default Greet;

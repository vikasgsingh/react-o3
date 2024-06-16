import React, { createContext } from "react";
import ComponentB from "./ComponentB";

const Biodata = createContext()    

const ComponentA = () => {

    return (
        <>
          <Biodata.Provider value='vikas'>
           <ComponentB/>
          </Biodata.Provider>
        </>
    );
}

export {Biodata};
export default ComponentA 

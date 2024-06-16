import React,{ useContext } from 'react';
import { Biodata } from './ComponentA'
const ComponentC = () => {
     const myName= useContext(Biodata)
    return (
        <>
           <h1>hello comp C {myName}</h1>
        </>
    );
}

export default ComponentC;
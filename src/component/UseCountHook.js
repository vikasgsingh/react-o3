import { useEffect } from "react";


const UseCountHook = (count) => {
     useEffect(()=>{
        document.title=`you clicked ${count} times`
     },[count])
}

export default UseCountHook;
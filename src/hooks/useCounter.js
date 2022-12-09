
import { useState } from "react";


function useCounter (celia){
    
    const [count, setCount] = useState(celia);
    
    function increment() {
        setCount((count) => count + 1);
      }
    function decrement() {
        setCount((count) => Math.max(0, count - 1));
    }
    return [ count, increment, decrement]

    

}


export default useCounter;
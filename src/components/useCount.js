import { useState } from "react";

export const useCount = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increase = () => {
    setCount(count+1);
  }
  
  const decrease = () => {
    setCount(count-1);
  }
  
  const reset = () => {
    setCount(initialCount);
  }

  return { count, increase, decrease, reset };
}
import { useState } from "react";

export const useCounter = (defaultValue: 0) => {
  const [count, setCount] = useState<number>(defaultValue);

  const counterIncrease = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const counterDecrease = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 0));
  };

  return { useCounter, counterIncrease, counterDecrease, count };
};

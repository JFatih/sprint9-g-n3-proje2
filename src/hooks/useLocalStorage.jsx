import { useState } from "react";

export const useLocalStorage = (key, initualValue) => {
  const [data, setData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem(key));
    if (storedData) {
      return storedData;
    } else {
      localStorage.setItem(key, JSON.stringify(initualValue));
      return initualValue;
    }
  });

  const updatedStorage = (value) => {
    setData(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [data, updatedStorage];
};

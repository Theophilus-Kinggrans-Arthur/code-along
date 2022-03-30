import React, { useState } from "react";

const useLocalStorage = (key, initialvalue) => {
  const [value, setValue] = useState(() => {
    if (typeof window === undefined) {
      return initialvalue;
    }

    try {
      const data = window.localStorage.getItem(key);
      return data ? JSON.parse(data) : initialvalue;
    } catch (error) {
      console.log(error);
      return initialvalue;
    }
  });

  const setLocalStorage = (value) => {
    try {
      setValue(value);

      if (typeof window !== undefined) {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [value, setLocalStorage];
};

export default useLocalStorage;

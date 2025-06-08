import { useState, useEffect } from "react";

export function useDebounce<T extends string>(value: T, delay = 500) {
  const [getValue, setGetValue] = useState<T>(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGetValue(value);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, value]);

  return getValue;
}

import { useState, useEffect, useRef } from 'react';

export function Timer({ initialCount = 0 }) {
  const [count, setCount] = useState(initialCount);
  const interval = useRef(null);

  useEffect(() => {
    interval.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);

    return () => {
      clearInterval(interval.current);
    };
  }, []);

  useEffect(() => {
    console.log(count);
  }, [count]);

  return (
    <>
      <h1>Counter: {count}</h1>
      {/* <button onClick={(e) => incrementCount(e)}>Incremetn</button> */}
    </>
  );
}

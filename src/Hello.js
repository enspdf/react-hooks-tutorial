import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';

export const Hello = () => {
  /*useEffect(() => {
      console.log('render');
  
      return () => {
        console.log('unmount');
      }
    }, []);*/

  // const renders = useRef(0);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);

  // console.log('Hello renders: ', renders.current++);

  const [rect, divRef] = useMeasure([data]);

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div ref={divRef}>{!data ? 'Loading...' : data}</div>
      </div>
      <pre>{JSON.stringify(rect, null, 2)}</pre>
      <div>count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>increment</button>
    </div>
  )
}

export default Hello;
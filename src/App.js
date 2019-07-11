import React, { useState, useEffect, useRef, useLayoutEffect, useCallback } from 'react';
import { useForm } from './useForm';
import Hello from './Hello';
import { useFetch } from './useFetch';
import { useMeasure } from './useMeasure';
import { Square } from './Square';

const App = () => {
  const [count, setCount] = useState(0);
  const favoriteNums = [7, 21, 37];

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, [setCount]);



  return (
    <div>
      <Hello increment={increment} />
      <div>Count: {count}</div>
      {
        favoriteNums.map(n => {
          return <Square increment={() => increment(n)} n={n} key={n} />
        })
      }
    </div>
  );

  // const [values, handleChange] = useForm({ email: '', password: '', firstName: '' });
  // const [count, setCount] = useState(() => JSON.parse(localStorage.getItem('count')));
  // const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);
  // const inputRef = useRef();
  // const hello = useRef(() => console.log('hello'));

  /*useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
  }, [count]);*/

  // const [showHello, setShowHello] = useState(true);

  /*useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect());
  }, []);*/

  // const [rect, inputRef2] = useMeasure([]);

  /*useEffect(() => {
    const onMouseMove = e => {
      console.log(e);
    }

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    }
  }, [values.email]);*/

  /*useEffect(() => {
    console.log('mount 1');
  }, []);

  useEffect(() => {
    console.log('mount 2');
  }, []);*/

  /*return (
    <div>
      {<div>{!data ? 'Loading...' : data}</div>}
      {<div>count: {count}</div>}
      {<button onClick={() => setCount(c => c + 1)}>increment</button>}
      <>
        {<button onClick={() => setShowHello(!showHello)}>toggle</button>}
        {showHello && <Hello />}
        <input
          ref={inputRef}
          type="text"
          name="email"
          value={values.email}
          onChange={handleChange}
        />
        <input
          ref={inputRef2}
          type="text"
          name="firstName"
          placeholder="first name"
          value={values.firstName}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          value={values.password}
          onChange={handleChange}
        />
        <button onClick={() => {
          inputRef.current.focus();
          hello.current();
        }}>focus</button>
      </>
    </div>
  );
  */
}

export default App;

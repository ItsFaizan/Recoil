import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { recoilCount, recoilSelector,modifier } from './State';
const AppTwo = () => {
  const [count, setCount] = useRecoilState(recoilCount);
  const [mod, setMod] = useRecoilState(modifier);
  const modifiedCount = useRecoilValue(recoilSelector);
  

 return (
  <div >
    
    <h1>Recoil Count from AppTwo: {count}</h1>
    <input type="number" value= {mod} onChange={(e) => setMod(e.target.value)} />
    <button onClick={() => setCount(count + 1)}>Increment modifiedCount is {modifiedCount }</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>

  </div>
 );
};
export default AppTwo;

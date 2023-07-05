import React from 'react';
import { useRecoilState } from 'recoil';
import { recoilCount } from './State';
const App = () => {
  const [count, setCount] = useRecoilState(recoilCount);
  

 return (
  <div >
    
    <h1>Recoil Count: {count}</h1>
    <button onClick={() => setCount(count + 1)}>Increment</button>
    <button onClick={() => setCount(count - 1)}>Decrement</button>

  </div>
 );
};
export default App;

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let totalCount = 0;
  const [total, setTotal] = useState(0);

  const increase=() => {
    setTotal(total+1);
  }
  const decrease=() => {
    setTotal(total-1);
  }
  return (
    <>
      <p>Toplama Tıklama Sayısı: {total}</p>
      <button onClick={() => {
        increase();
      }}>+</button>
      
      <button onClick={decrease}>-</button>

    </>
  );
}

export default App;

import React, { useState } from 'react';

const App = () => {
  const [ count, setCount ] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const increment2 = () => setCount(previosCount => previosCount + 1);
  const decrement2 = () => setCount(previosCount => previosCount - 1);

  const reset = () => setCount(0);
  const multiple = () => setCount(previosCount => previosCount * 2);
  const divisionByThree = () => setCount((previosCount) => {
    return previosCount % 3 === 0 ? previosCount / 3 : previosCount;
  });

  return (
    <React.Fragment>
      <p>count: {count}</p>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={increment2}>+1</button>
        <button onClick={decrement2}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={multiple}>x2</button>
        <button onClick={divisionByThree}>3の倍数の時だけ3で割る</button>
      </div>
    </React.Fragment>
  );
}

export default App;

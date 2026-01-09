import React, { useState } from 'react';

const Incdec = () => {
  const [count, setCount] = useState(0);

  const Inc = () => {
    setCount(count + 1);
  };

  const Dec = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  
  const Reset = () => {
    setCount(0);
  };

  return (
    <>
      <h2>Counter {count}</h2>
      <button onClick={Inc}>Inc</button> <br /><br />
      <button onClick={Dec}>Dec</button> <br /> <br />
      <button onClick={Reset}>Reset</button>
    </>
  );
};

export default Incdec;

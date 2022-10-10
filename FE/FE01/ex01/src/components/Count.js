import React from "react";
import { useState } from "react";

const Count = () => {
  const [count, SetCount] = useState(0);
  const onChange = (event) => {
    const value = Number(event.target.value);
    if (isNaN(value)) return;
    SetCount(value);
  };
  const plusCount = () => {
    SetCount((current) => current + 1);
  };
  const minusCount = () => {
    SetCount((current) => current - 1);
  };
  console.log(count);
  return (
    <div>
      <h1>ex01</h1>
      <h2>current count : {count}</h2>
      <input onChange={onChange} />
      <button onClick={plusCount}>+</button>
      <button onClick={minusCount}>-</button>
    </div>
  );
};

export default Count;

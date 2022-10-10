import React from "react";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState("");
  const onChange = (event) => {
    console.log("for input:", event.target.value);
    setInputValue(event.target.value);
  };
  const onClick = (event) => {
    event.preventDefault();
    if (inputValue === "") return;
    console.log("for click btn:", inputValue);
    setInputValue("");
  };
  return (
    <div>
      <form>
        <input value={inputValue} onChange={onChange} />
        <button onClick={onClick}>button</button>
      </form>
    </div>
  );
};

export default Form;

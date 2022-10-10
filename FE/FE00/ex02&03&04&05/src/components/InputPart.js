import { React, useState } from "react";

const InputPart = () => {
  const [value, setValue] = useState("");
  const [toDoList, setToDoList] = useState([]);
  const onClick = (event) => {
    event.preventDefault();
    if (value === "" || toDoList.includes(value)) return;
    setToDoList(() => [value, ...toDoList]);
    setValue((current) => "");
  };
  const onChange = (event) => {
    setValue(event.target.value);
  };

  const btnClick = (event) => {
    const newList = toDoList.filter((element) => {
      return element !== event.target.value;
    });
    setToDoList([...newList]);
  };

  return (
    <div>
      <hr />
      <form>
        <input value={value} onChange={onChange} />
        <button onClick={onClick}>Add</button>
      </form>
      <hr />
      <ul>
        {toDoList.length > 0 &&
          toDoList.map((toDo) => (
            <li key={toDo} checked={true}>
              {toDo}
              <button value={toDo} onClick={btnClick}>
                x
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default InputPart;

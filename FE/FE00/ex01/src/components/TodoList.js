import React from "react";

const TodoList = () => {
  return (
    <div>
      <select
        style={{
          width: "100%",
          color: "#f00",
          borderRight: "2px solid #000",
          backgroundColor: "yellow",
          height: "30vh",
          textAlign: "center",
        }}
      >
        TodoList
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
    </div>
  );
};

export default TodoList;

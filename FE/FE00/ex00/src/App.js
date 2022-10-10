import React from "react";

function App() {
  return (
    <div>
      <div>
        <h1
          style={{
            backgroundColor: "skyblue",
            height: "30vh",
            textAlign: "center",
          }}
        >
          ToDoList
        </h1>
      </div>
      <div>
        <h1
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "30vh",
            textAlign: "center",
          }}
        >
          입력할부분
        </h1>
      </div>
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
    </div>
  );
}

export default App;

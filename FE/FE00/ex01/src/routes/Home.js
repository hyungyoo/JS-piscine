import React from "react";
import Header from "../components/Header";
import InputPart from "../components/InputPart";
import TodoList from "../components/TodoList";

const Home = () => {
  return (
    <div>
        <Header />
        <InputPart />
        <TodoList />
    </div>
  );
};

export default Home;

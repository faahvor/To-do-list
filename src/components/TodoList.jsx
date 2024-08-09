import React, { useState } from "react";
import NewTodo from "./NewTodo";
import Todos from "./Todos";
import { v4 as uuidv4 } from "uuid";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e) => {
    e.preventDefault();
    setInputValue(e.target.value);
    console.log(e.target.value);
  };
  const addTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        id: uuidv4(),
        todo: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };
  return (
    <div>
      <NewTodo addTodo={addTodo} handleInputChange={handleInputChange} />
      <Todos todos={todos} />
    </div>
  );
};
export default TodoList;

import React from "react";

const Todos = ({ todos }) => {
  return (
    <div className="flex flex-col">
      {todos.map((todo) => (
        <span key={todo.id}>{todo.todo}</span>
      ))}
    </div>
  );
};
export default Todos;

import React, { useState } from "react";
const ToDoList=()=> {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
      />
      <button onClick={addTodo}>Add Todo</button>

      {todos.map((todo, i) => {
        return <li key={i}>{todo}</li>;
      })}
    </div>
  );
}
export default ToDoList;

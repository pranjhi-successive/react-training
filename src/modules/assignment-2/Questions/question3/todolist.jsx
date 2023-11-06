import React, { useState } from "react";
const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const addTodo = () => {
    if (newTodo.length > 0) {
      setTodos([...todos, newTodo]);
      setNewTodo("");
    }
  };
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((todo, i) => {
      return i !== index;
    });
    setTodos(updatedTodos);
  };
  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      {todos.map((todo, i) => {
        return (
          <div key={i}>
            <input
              type="checkbox"
              style={{
                width: "40px",
                height: "30px",
                marginRight: "10px",

                cursor: "pointer",
              }}
            />
            {todo}
            <button onClick={() => deleteTodo(i)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default ToDoList;

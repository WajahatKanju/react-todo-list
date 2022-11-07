import React from "react";
import TODO from "./TODO.js";

import "./TodoList.css";

export const ACTIONS = {
  COMPLETE: "Complete",
  ADD: "Add",
  DELETE: "Delete",
};

function TODOS() {
  function reducer(todos, action) {
    switch (action.type) {
      case ACTIONS.ADD:
        return [...todos, newTodo(action.payload.value)];
      case ACTIONS.DELETE:
        return todos.filter((todo) => {
          return todo.id !== action.id;
        });
      case ACTIONS.COMPLETE:
        return todos.map((todo) => {
          if (todo.id === action.id) {
            console.log(todo);
            return { ...todo, complete: !todo.complete };
          } else {
            return todo;
          }
        });
      default:
        return todos;
    }
  }

  const [todos, dispatch] = React.useReducer(reducer, []);
  const [todo, setTodo] = React.useState("");
  function handleSubmit(e) {
    e.preventDefault();
    if (todo === "") return;
    dispatch({ type: ACTIONS.ADD, payload: { value: todo } });
    setTodo("");
  }

  function newTodo(value) {
    return { id: Date.now(), value: value, complete: false };
  }

  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todos.map((todo, i) => {
        return <TODO key={"todo_" + i} todo={todo} dispatch={dispatch} />;
      })}

      <form onSubmit={handleSubmit}>
       
        <input
          className="task"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          required
        />
      </form>
    </div>
  );
}

export default TODOS;

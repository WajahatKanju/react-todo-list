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
        return [...todos, newTodo(action.payload.value, action.payload.date)];
      case ACTIONS.DELETE:
        return todos.filter((todo) => {
          return todo.id !== action.id;
        });
      case ACTIONS.COMPLETE:
        return todos.map((todo) => {
          if (todo.id === action.id) {
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
  const [dateTime, setDateTime] = React.useState("");

  function handleSubmit(e) {
    e.preventDefault();

    console.log(dateTime);

    if (todo === "") return;
    dispatch({ type: ACTIONS.ADD, payload: { value: todo, date: dateTime } });
    setTodo("");
    setDateTime("");
  }

  function newTodo(value, date) {

    return { id: Date.now(), value: value, complete: false, date: date };
  }

  return (
    <div className="todo-list">
      <h2>TODO LIST</h2>
      {todos.map((todo, i) => {
        return <TODO key={"todo_" + i} todo={todo} dispatch={dispatch} />;
      })}

      <form onSubmit={handleSubmit}>
        <div className="wrapper">
          <input
          value={dateTime}
            className="time"
            name="datetime"
            id="datetime"
            onChange={(e) => {
              setDateTime(e.target.value);
            }}
            type="datetime-local"
          />
          <label id="datetime-label" htmlFor="datetime">
            Set datetime OPTIONAL
          </label>
        </div>

        <input
          className="task"
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          onBlur={(e) => (e.target.required = true)}
        />
      </form>
    </div>
  );
}

export default TODOS;

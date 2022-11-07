import React from "react";
import "./todo.css";
import { ACTIONS } from "./TodoList";

function TODO({ todo, dispatch }) {
  return (
    <>
      <div className="todo">
        <div className="todo-text">
          <p className={todo.complete ? "complete" : ""}>{todo.value}</p>
        </div>
        <div className="todo-functions">
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.COMPLETE, id: todo.id });
            }}
            className="btn btn-check"
          >
            {/* <i className="fa-solid fa-check"></i> */}
            <i
              className={
                todo.complete ? "fa-solid fa-check dull" : "fa-solid fa-check checked"
              }
            ></i>
          </button>
          <button
            onClick={() => {
              dispatch({ type: ACTIONS.DELETE, id: todo.id });
            }}
            className="btn btn-delete"
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default TODO;

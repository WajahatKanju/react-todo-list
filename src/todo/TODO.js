import React from "react";
import "./todo.css";
import { ACTIONS } from "./TodoList";

function TODO({ todo, dispatch }) {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  function parsetime(hours, minues, seconds) {
    let AMPM = hours > 12 ? "PM" : "AM";
    hours = hours > 12 ? hours - 12 : hours;
    if (hours === 12) {
      AMPM = "AM";
    } else if (hours === 0) {
      hours += 12;
      AMPM = "PM";
    }

    return `${String(hours).padStart(2, "0")}:${String(minues).padStart(
      2,
      "0"
    )} ${AMPM}`;
  }

  const parseDate = () => {
    if (todo.date === "") {
      return;
    } else {
      const date = new Date(todo.date);
      const DD = String(date.getDate()).padStart(2, "0");
      const MM = String(date.getMonth() + 1).padStart(2, "0"); //January is 0!
      const YYYY = date.getFullYear();
      const hh = date.getHours();
      const mm = date.getMinutes();
      const ss = date.getSeconds();
      return DD + "-" + monthNames[MM-1] + "-" + YYYY + " " + parsetime(hh, mm, ss);
    }
  };

  return (
    <>
      <div className="todo">
        <div className="todo-text">
          <p className={todo.complete ? "complete" : ""}>{todo.value}</p>
          {console.log(todo)}
          <p className={todo.complete ? "hidden" : ""}>
            <small> {parseDate()}</small>
          </p>
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
                todo.complete
                  ? "fa-solid fa-check dull"
                  : "fa-solid fa-check checked"
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

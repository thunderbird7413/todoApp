import React from "react";
import "./Card.css";
function Card({ task, handleDelete, handleComplete }) {
  return (
    <>
      <div class="note" style={{ backgroundColor: "#FFF176" }}>
        <h2>{task.title}</h2>
        <p>{task.desc}</p>
        <div className="box">
          <button style={{ backgroundColor: "transparent" }}>
            <i class="fa-solid fa-trash" onClick={() => handleDelete(task)}></i>
          </button>
          <button style={{ backgroundColor: "transparent" }}>
            <i
              class="fa-solid fa-check"
              onClick={() => handleComplete(task)}
            ></i>
          </button>
        </div>
        <p>
          Created on: {task.date} at {task.time}
        </p>
      </div>
    </>
  );
}

export default Card;

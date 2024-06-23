import React from "react";
import "./Card.css";
function Card({ task, handleDelete, index, handleComplete }) {
  return (
    <>
      <div class="note" style={{ backgroundColor: "#FFF176" }}>
        <h2>{task.title}</h2>
        <p>{task.desc}</p>
        <div className="box"></div>
      </div>
    </>
  );
}

export default Card;

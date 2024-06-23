import React from "react";
import "./Todo.css";
function Todo() {
  return (
    <>
      <div class="container">
        <aside class="menu">
          <div class="menu-header">
            <h2>Menu</h2>
            <input type="text" placeholder="Search" />
          </div>
          <nav>
            <ul>
              <li>
                <h1>Tasks</h1>
              </li>
              <li>
                <a href="/todo">To Do</a>
              </li>
              <li>
                <a href="/completed">Completed</a>
              </li>
            </ul>
            <a href="/newtask">
              <button>Add New Task</button>
            </a>
          </nav>
          <div class="lists">
            <h3>Lists</h3>
            <ul>
              <li>
                Personal <span>3</span>
              </li>
              <li>
                Work <span>3</span>
              </li>
              <li>
                List 1 <span>3</span>
              </li>
            </ul>
            <button>Add New List</button>
          </div>
          <div class="tags">
            <h3>Tags</h3>
            <div class="tag">Tag 1</div>
            <div class="tag">Tag 2</div>
            <button>Add Tag</button>
          </div>
        </aside>
        <div className="content-box">
          <h1
            style={{
              textAlign: "left",
              padding: "3vw 0 2vw 3vw",
              display: "block",
            }}
          >
            To Do
          </h1>
          <main class="sticky-wall">
            <h1>Hello</h1>
          </main>
        </div>
      </div>
    </>
  );
}

export default Todo;

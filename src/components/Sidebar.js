import React from "react";
import "./Sidebar.css";
import Card from "./Card";
function Home() {
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
                <a href="#">To Do</a>
              </li>
              <li>
                <a href="#">Completed</a>
              </li>
            </ul>
            <button>Add New Task</button>
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
        {/* <main class="sticky-wall">
          <Card />
        </main> */}
      </div>
    </>
  );
}

export default Home;
